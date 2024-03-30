import express from "express";

import { changepass } from "../controller/auth.controller.js";
import { signin } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/changepass", changepass)
router.post("/adminsignin", signin)

export default router;