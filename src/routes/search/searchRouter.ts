import express from "express";
import { search } from "../../controllers/search/searchController";
import { searchMiddleware } from "../../middleware/searchMiddleware";
const router = express.Router();

router.post("/", searchMiddleware, search);

export default router