import express from "express";

import { getUserByEmail, creatUser } from "../db/users.js";
import { authentication, random } from "../helpers/index.js";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    console.log(req.body);

    if (!username || !email || !password) {
      return res.sendStatus(400);
    }

    const userExist = await getUserByEmail(email);

    if (userExist) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await creatUser({
      username,
      email,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
