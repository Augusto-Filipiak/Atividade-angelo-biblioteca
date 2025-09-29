import { Router } from "express";
import { registarUsuario } from "../Controllers/Controller.js";

const roteadorUser = Router();

roteadorUser.post("/", (req, res) => {
    registarUsuario(req, res)
})

export default roteadorUser;