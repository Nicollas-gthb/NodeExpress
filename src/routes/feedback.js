const express = require("express")
const router = express.Router()
const feedbackController = require("../controllers/feedback")

// Rota para receber o feedback

router.post("/enviar", feedbackController.enviar)
router.get("/lista", feedbackController.listar)
router.get("/dados", feedbackController.dadosBuscados)
router.post("/remover/:id", feedbackController.remover)

module.exports = router