import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running port http://localhost:" + PORT);
  connectDb();
});

// P0MghB8DzqNz6GrD
