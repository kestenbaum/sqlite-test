import { Router } from "express";
import {
  listPosts,
  showNewPostForm,
  handleCreatePost,
  handleDeletePost,
  handleUpdateById,
  handleGetPostById,
} from "./controllers/postController";
import { showLoginForm, loginUser, logoutUser, registerUser, showRegisterForm } from "./controllers/authController";
import { profileController, checkedSessionUser } from "./controllers/profileController";
import { requireAuth } from "./middleware/authMiddleware";


const router = Router();

router.get("/", listPosts);

router.get("/new", requireAuth, showNewPostForm);
router.post("/new",requireAuth,  handleCreatePost);

router.post("/delete/:id", requireAuth, handleDeletePost);

router.get("/update/:id", requireAuth, handleGetPostById);
router.post("/update/:id", requireAuth, handleUpdateById);

router.get("/register", showRegisterForm);
router.post("/register", registerUser);

router.get("/login", showLoginForm);
router.post("/login", loginUser);

router.get("/logout", requireAuth, logoutUser);

router.get("/profile", requireAuth, checkedSessionUser);
router.get("/profile/:id", requireAuth, profileController);

export default router;
