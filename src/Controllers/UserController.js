import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function registarUsuario(req, res) {
    
    const { username, password } = req.body;

    if(!username || !password) {
        throw new Error("Está faltando informação")
    }

    const novoUser = {
        username: username,
        password: password
    }

    try{
    const criar = await prisma.user.create ({
        data: novoUser
    })

    return res.status(201).send(criar)
} catch(err) {
    return console.log(err)
}
}


export {registarUsuario}