import express from "express"

const app = express()
app.use(express.json())

const users = []

app.post("/usuarios", (req, res) => {
    
    users.push(req.body)

    res.status(201).json(users)

})

app.get("/usuarios", (req, res) => {
  
    res.status(200).json(users)
})

app.listen(3000, () => {
  console.log("Rodando na porta 3000")
})

/* Criar API de usuários:
    
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Excluir um usuário

    */

/*
    login mongoDB: 
    user: gabnunesdev
    password: bltAKTVvyGiFFROH
*/