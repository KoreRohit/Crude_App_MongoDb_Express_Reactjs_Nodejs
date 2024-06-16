import express from "express";
import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js";

const route = express.Router();

route.post("/create",create); // create controller pass to route

route.get("/getall",getAll); //fetch all user data

route.get("/getone/:id",getOne); //fetch specific userdata by id

route.put("/update/:id",update); //update specific userdata by id

route.delete("/delete/:id",deleteUser); //delete user data by using id

export default route;