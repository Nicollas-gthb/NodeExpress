const express = require("express")
const path = require("path")
const db = require("../database/db")

const register = (req, res) => {
    const { nome, email } = req.body

    db.query("insert into user (nome, email) values (?, ?)", [nome, email], 
    (err, result) => {

        if(err) return res.status(500).send(err)

        res.status(201).json({id:result.insertId, nome, email})
        
    })
}

const list = (req, res) => {
    db.query("select * from user", 
    (err, result) => {
        if(err) return res.status(500).send(err)

        res.json(result)
    })
}

module.exports = { register, list }