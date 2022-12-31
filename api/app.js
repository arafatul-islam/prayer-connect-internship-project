import express from "express";
import dotenv from "dotenv";

// module import
import connect from "./DB/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.listen(port, () => {
  console.log("server running on port", port);
  connect();
});
