import express from "express";

import { register } from "../controllers/authentication.js";

export default function (router) {
  router.post("/auth/register", register);
}
