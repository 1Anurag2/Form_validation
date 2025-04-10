import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

import formRouter from "./router/formRouter.js";
import { connectDB } from "./config/dbconncet.js";

const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//Database
connectDB()

//Router
app.use('/',formRouter)

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});



