require("dotenv").config();
const express = require("express");
const userRouter = require("./users/userRouter");

const PORT = process.env.PORT || 7000;

const server = express();

server.use(logger);
server.use(express.json());

server.use("/api/users", userRouter);


server.listen(PORT, () => console.log("Server is working..."));


function logger(req, res, next) {
    const currentDate = new Date();
    console.log(`${req.method} "${req.path}" ${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()}`);
    next();
}