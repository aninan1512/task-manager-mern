
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // needed to allow frontend requests
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json());

// Routes
app.use("/api/Tasks", taskRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
