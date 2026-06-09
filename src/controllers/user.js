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


const hardDelete = (req, res) => {
    const { id } = req.params

    db.query("delete from user where id = ?", [id],
    (err, result) => {
            if(err) return res.status(500).send(err)

            res.sendStatus(204)
        })
}


const updateAll = (req, res) => {

    const { nome, email } = req.body
    const { id } = req.params

    db.query("update user set nome = ?, email = ? where id = ?", [nome, email, id],
    (err, result) => {
            if(err) return res.status(500).send(err)

            res.status(201).json({id:result.insertId, nome, email})
        })
}

module.exports = { register, list, hardDelete, updateAll }