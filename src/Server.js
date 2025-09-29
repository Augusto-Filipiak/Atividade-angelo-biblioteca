import express from "express";
import roteadorUser from "./routes/BooksRouter.js";
import roteadorBooks from "./routes/UserRouter.js";
const api = express();

api.use(express.json());

api.use('/users', roteadorUser)
api.use('/books', roteadorBooks)

api.listen(3000)