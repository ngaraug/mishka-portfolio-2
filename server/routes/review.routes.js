import express from "express";

import { addReview } from "../controller/review.controller.js";

const router = express.Router();

router.post('/addreview', addReview)

export default router;