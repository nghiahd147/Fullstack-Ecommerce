import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser()); // chuyển cookie thành javascript để dễ dàng truy xuất
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running port http://localhost:" + PORT);
  connectDb();
});

// P0MghB8DzqNz6GrD
