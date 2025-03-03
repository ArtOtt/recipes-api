import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

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
