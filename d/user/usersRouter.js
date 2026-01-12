const express = require("express");
const { createUser, loginUser } = require("./usersController");
const router = express.Router();

router.post("/", async (req,res) => {
    try {
        const newUser = await createUser(req.body);
        res.json({
            message: "success",
            payload: newUser
        })
    } catch (error) {
        res.status(500).json({
            message: "failure",
            payload: error.message
        })
    }
})

router.post("/login", async (req,res) => {
    try {
        const loginStatus = await loginUser(req.body);
        res.json({
            message: "success",
            payload: "Successfully logged in"
        })       
    } catch (error) {
        res.status(500).json({
            message: "failure",
            payload: error
        })
    }
})


module.exports = router;