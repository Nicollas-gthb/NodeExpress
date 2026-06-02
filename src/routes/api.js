const express = require("express")
const router = express.Router()

const userController = require("../controllers/user")


router.post("/user/register", userController.register)

router.get("/user/list", userController.list)

module.exports = router