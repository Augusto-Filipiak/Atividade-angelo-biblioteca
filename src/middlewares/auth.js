import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 

export async function token(req, res, next) {
    const auth = req.headers.authorization

    
    if(!auth.startsWith("Basic") || !auth) {
        return res.status(400).json({mensagem: "Token precisa ser basic"})
    }

    const counteudoToken = auth.split(" ")[1]

    const tokenDescript = Buffer.from(counteudoToken, "base64").toString();

    const [username, password] = tokenDescript.split(":")

    try {
    const acessarUser = await prisma.user.findUnique ({
        where: { username }
    })

    if (!acessarUser) {
    return res.status(401).json({ mensagem: "Usuário não encontrado" });
    }

    if(!password || acessarUser.password !== password) {
        res.status(401).json({ mensagem: "A senha está incorreta!"})
        throw new Error("A senha está incorreta!")
    }

    req.user = acessarUser

    next()

    } catch(err) {
        console.log(err)
    }


}