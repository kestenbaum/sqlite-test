import { Router } from "express";
import {
  listPosts,
  showNewPostForm,
  handleCreatePost,
  handleDeletePost,
} from "./postController";

const router = Router();

router.get("/", listPosts);
router.get("/new", showNewPostForm);
router.post("/new", handleCreatePost);
router.post("/delete/:id", handleDeletePost);

export default router;
