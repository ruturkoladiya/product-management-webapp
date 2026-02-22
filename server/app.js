import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./app/config/db.js";
import errorHandler from "./app/middleware/errorHandler.js";

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"],
  credentials: true
}));

// Global Error Handler (must be last)
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
