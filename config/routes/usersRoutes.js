import express from "express";
import {
    createUsers,
    getUser,
    login,
    } from "../../src/api/v1/controllers/usersControllers.js";

import { isLogin } from "../../src/api/v1/middlewares/validaToken.js";

import { validateParametersUser } from '../../src/api/v1/middlewares/validaParamsUser.js';
import { validparameters } from '../../src/api/v1/middlewares/validateParamsLogin.js';
const router = express.Router();

router.post("/usuarios", validateParametersUser, createUsers);
router.post("/login",validparameters, login);
router.get("/usuarios", isLogin, getUser);

export default router;