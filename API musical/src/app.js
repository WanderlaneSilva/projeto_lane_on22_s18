require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

const musicRouter = require("./router/musicRouter");

app.use("/music",musicRouter);  // criei rota raiz

const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger/swagger_output.json")
app.use("/my-route-document", swaggerUi.serve, swaggerUi.setup(swaggerFile))


module.exports = app;
