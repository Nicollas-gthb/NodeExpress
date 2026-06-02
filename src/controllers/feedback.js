const express = require("express")
const path = require("path")
const db = require("../database/db")
let index = 0

const enviar = (req, res) => {
    const { nome, feedback } = req.body

    console.log(`${nome} => ${feedback}`)

    const lista = [{"p1": nome, "p2": feedback}]
    
    res.json(lista)
}

const listar = (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/feedback.html"))
}

const remover = (req, res) => {

    const id = Number(req.params.id)
    
    const item = db.find(tupla => tupla.id === id)

    item.ativo = false

    res.redirect("/feedbacks/lista")
}

const dadosBuscados = (req, res) => {
    const itensAtivos = db.filter(item => item.ativo)
    res.json(itensAtivos)
}

module.exports = { enviar, listar, remover, dadosBuscados }