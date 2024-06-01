const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const connectDB = require("./Config/db");
const todoRoutes=require("./Routes/todoRoutes")


const app=express();
app.use(express.json());


dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;

app.use(cors());

//listen

app.use("/api/todo",todoRoutes);
app.listen(PORT, () => {
  console.log(
    `Node Server Running In  Port ${process.env.PORT}`
  );
});