import express from "express";
import roteadorUser from "./routes/Users/Routers/Router.js";
import roteadorBooks from "./routes/Books/Routers/Router.js";
const api = express();

api.use(express.json());

api.use('/users', roteadorUser)
api.use('/books', roteadorBooks)

api.listen(3000)