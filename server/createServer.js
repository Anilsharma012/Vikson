// ✅ server/createServer.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { handleDemo } from "./routes/demo.js";
import authRoutes from "./routes/authRoutes.js";
import sendMailRoutes from "./routes/sendMail.js"; // ✅ Mail route
import productRoutes from "./routes/product.js";

dotenv.config(); // ✅ Load .env

export async function createServer() {
  await connectDB(); // ✅ Connect to MongoDB

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "✅ Server running fine!" });
  });

  // Routes
  app.get("/api/demo", handleDemo);
  app.use("/api/auth", authRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api", sendMailRoutes); // ✅ Add this line to support /api/contact and /api/quote

  return app;
}
