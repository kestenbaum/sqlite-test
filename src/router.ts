import { Router } from "express";
import {
  listPosts,
  showNewPostForm,
  handleCreatePost,
  handleDeletePost,
  handleUpdateById,
  handleGetPostById,
} from "./postController";

const router = Router();

router.get("/", listPosts);
router.get("/new", showNewPostForm);
router.post("/new", handleCreatePost);
router.post("/delete/:id", handleDeletePost);
router.get("/update/:id", handleGetPostById);
router.post("/update/:id", handleUpdateById);


export default router;
