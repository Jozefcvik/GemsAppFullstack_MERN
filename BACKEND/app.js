require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Environment variables with fallback values
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// MongoDB connection URL
const dbURL = `${process.env.DB_URL}/${process.env.DB_NAME}`;

const gemsRoutes = require("./gems/gems-routes");
const usersRoutes = require("./users/users-routes");

// Built-in JSON middleware (no need for body-parser)
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  next();
});

// Routes
app.use("/api/gems", gemsRoutes);
app.use("/api/users", usersRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || "An unknown error occurred!",
  });
});

// Connect to MongoDB and start server
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
