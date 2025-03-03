import mongoose from "mongoose";
import bcrypt, { hash } from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng điền đầy đủ"],
    },
    email: {
      type: String,
      required: [true, "Vui lòng điền đầy đủ"],
      unique: true, // duy nhất
      lowercase: true, // chữ thường
      trim: true, // dấu phẩy
    },
    password: {
      type: String,
      required: [true, "Vui lòng điển đầy đủ"],
      minLength: 6
    },
    cartItems: [
      {
        quantity: {
          type: Number,
          default: 1,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

// Middleware tự dộng mã hóa mật khẩu trước khi lưu vào db

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.compare = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
