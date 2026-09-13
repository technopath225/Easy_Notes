
import express from "express";
import cors from "cors"
import homeRouter from "./homeRoute.js"
import getAllRoute from "./routeGetAll.js";
import createRoute from "./routerCreate.js";
import deleteRoute from "./routerDelete.js";
import routerEditNote from "./routerEditNote.js";
import searchRoute from "./routerSearch.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
  }));
const PORT =  5005;


//app.use(cors);
app.get("",(req,res) => {
    res.redirect("/home");
})
app.use("/home",homeRouter);
  
app.use("/all",getAllRoute);


app.use("/create", createRoute);

app.use("/edit", routerEditNote);

app.use("/delete", deleteRoute);

app.use("/search", searchRoute);

const sertver = app.listen(PORT, () => {

    console.log("Server STarted");

})