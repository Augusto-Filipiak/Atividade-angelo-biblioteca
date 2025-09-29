import express from "express";
import roteadorUser from "./routes/UserRouter.js";
import roteadorBooks from "./routes/BooksRouter.js";
const api = express();

api.use(express.json());

api.use('/auth', roteadorUser)
api.use('/books', roteadorBooks)

api.listen(3000)