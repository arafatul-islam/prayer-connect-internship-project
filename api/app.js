import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// module import
import connect from "./DB/db.js";
import todoRoutes from "./routes/todoRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());

// routes

app.use("/api/todo", todoRoutes);
app.listen(port, () => {
  console.log("server running on port", port);
  connect();
});
