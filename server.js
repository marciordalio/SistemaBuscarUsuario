import express from "express";
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()


const app = express(); // Transformei o express em uma função , quando eu chamar a app ela vai chamar o express
 
const user = [] 

app.use(express.json()); // aviso o express vou utilizar JSON 


app.post("/user", async (req, res) => {
    
  await prisma.user.create({ //  coloquei await para esperar a criação do usuário e async para poder utilizar o await
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })
  
    res.status(201).send("ok post"); 
    


})

app.get("/user", (req, res) => {
    // req - requisição
    // res - resposta o user é o nome da rota 
    // precisa retornar algo para o usuário
    res.status(200).json(user);
  
})




//precisa saber qual porta vai rodar o servidor
app.listen(3000)
// quando o servidor estiver rodando, vai executar essa função
    console.log("Servidor rodando em http://localhost:3000");

  










// Criar nossa API de usuários
// -Criar um usuário
// -Listar todos os usuários
// -Deletar um usuário
