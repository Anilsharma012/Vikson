// server/server.js
import { createServer } from "./createServer.js";
import connectDB from "./db.js";
import dotenv from "dotenv";

dotenv.config();
await connectDB(); // ensure connection before starting server

const app = createServer();
app.listen(4000, () => {
  console.log("🚀 Server running on http://localhost:4000");
});
