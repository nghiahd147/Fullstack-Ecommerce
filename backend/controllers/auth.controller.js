import User from "../model/user.model.js";
import jwt from "jsonwebtoken"
const generateTokens = (userId) => {
  const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m"
  })
  const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d"
  })

  return { accessToken, refreshToken }
}

const storeRefreshToken = async(userId, refreshToken) => {
  await redis.set(`refreshToken:${userId}`, refreshToken, "EX",7*24*60*60);
  // redis.set(key, value, 'EX', time); (EX: hết hạn)
}

const setCookies = async(res, accessToken, refreshToken) => {
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    samSite: "strict",
    maxAge: 15 * 60 * 1000
  })
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    samSite: "strict",
    maxAge: 7 * 24 * 60 * 60
  })
}

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password });

    // authentication

    const { accessToken, refreshToken } = generateTokens(user._id) 
    await storeRefreshToken(user._id, refreshToken)

    // setcookies
    setCookies(res, accessToken, refreshToken)

    res.status(201).json({ user, message: "Created success !!!" });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const login = async (req, res) => {
  res.send("login");
};

export const logout = async (req, res) => {
  res.send("logout");
};
