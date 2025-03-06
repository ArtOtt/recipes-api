import express from "express";

import authentication from "./authentication.js";

const router = express.Router();

export default function () {
  authentication(router);
  return router;
}
