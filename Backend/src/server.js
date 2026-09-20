
import express from "express";
import cors from "cors"
import homeRouter from "./routes/homeRoute.js"
import getAllRoute from "./routes/routeGetAll.js";
import createRoute from "./routes/routerCreate.js";
import deleteRoute from "./routes/routerDelete.js";
import routerEditNote from "./routes/routerEditNote.js";
import searchRoute from "./routes/routerSearch.js";

import createUserRoute from "./routes/routerCreateUser.js";
import signInRoute from "./routes/routerSignIn.js";
import signOutRoute from "./routes/routerSignOut.js";
import "dotenv/config";
import cookieParser from "cookie-parser";


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
  }));
const PORT =  5005;


//app.use(cors);
app.get("",(req,res) => {
    res.redirect("/signin");
})
app.use("/signin",signInRoute);

app.use("/signout",signOutRoute);

app.use("/register",createUserRoute);

app.use("/home",homeRouter);
  
app.use("/all",getAllRoute);


app.use("/create", createRoute);

app.use("/edit", routerEditNote);

app.use("/delete", deleteRoute);

app.use("/search", searchRoute);

const sertver = app.listen(PORT, () => {

    console.log("Server STarted");

})