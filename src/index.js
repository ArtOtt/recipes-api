import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/index.js";

//App-Instanz mit Express
const app = express();

app.use(
  cors({
    credential: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(5009, function () {
  console.log("Server läuft auf Port 5009");
});

const MONGO_DB =
  "mongodb+srv://artOtt:HariHaribol108@recipes-app.a2sj5.mongodb.net/?retryWrites=true&w=majority&appName=recipes-app";

mongoose.Promise = Promise;
mongoose.connect(MONGO_DB);
mongoose.connection.on("error", function (error) {
  console.log(error);
});

app.use("/", router());
