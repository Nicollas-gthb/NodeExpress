//============================= CONFIGS ===========================

const express = require("express")
const path = require("path")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "./public")))

const db_path = require("./src/database/db")

//============================= ROTAS ============================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

const apiRouter = require("./src/routes/api")
app.use("/api", apiRouter)

const feedbackRouter = require("./src/routes/feedback")
app.use("/feedbacks", feedbackRouter)

//============================= PORTA ============================

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

