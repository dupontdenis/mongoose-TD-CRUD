import express from "express";
import * as postController from "../controllers/postController.mjs";

const router = express.Router();

// Routes
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);

export default router;
