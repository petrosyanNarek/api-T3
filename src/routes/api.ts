import express from "express";
import searchRouter from "./search/searchRouter";
const router = express.Router();

router.use("/search", searchRouter);

export default router;