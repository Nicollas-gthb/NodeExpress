const express = require("express")
const router = express.Router()

const userController = require("../controllers/user")


router.post("/user/register", userController.register)

router.get("/user/list", userController.list)

router.delete("/user/delete/:id", userController.hardDelete)

router.put("/user/updateAll/:id", userController.updateAll)

module.exports = router