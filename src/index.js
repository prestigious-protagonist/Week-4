const express = require("express");
const appRouter = require("./routes/index.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
bodyParser.urlencoded({extended: true});

app.use("/api",appRouter);

app.listen(3000,() => {
    console.log("Listening on port 3000");
})