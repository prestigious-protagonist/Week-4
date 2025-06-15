const express = require("express");
const router = express.Router();
const {getRequestValidator, postRequestValidator} = require("../../middlewares/index.js")
router.get("/", getRequestValidator, (req, res) => {
    res.send("You are hitting the /api/v1 endpoint.")
})
router.post("/", postRequestValidator, (req, res) => {
    res.send("Post request validated successfully.")
})

module.exports = router;