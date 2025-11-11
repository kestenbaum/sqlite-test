import { Request, Response } from "express";
import { createPost, deletePostById, getAllPosts, getPostById, updatePostById } from "../models/postModel";

export function listPosts (req: Request, res: Response) {
    const posts = getAllPosts()
    res.render("index.njk", { posts })
}

export function showNewPostForm (req: Request, res: Response) {
    res.render("form.njk")
}

export function handleDeletePost (req: Request, res:Response) {
    const { id } = req.params
    deletePostById(Number(id))
    res.redirect("/")
}

export function handleCreatePost (req: Request, res: Response) {
    const { title, content } = req.body as { title: string, content: string }
    const userId = req.session.user?.id

    if (!userId) {
         return res.redirect("/login");
    }

    createPost(title, content, userId);
    res.redirect("/")
}

export function handleGetPostById (req: Request, res: Response) {
    const { id } = req.params;
    const post = getPostById(Number(id));
    res.render("update.njk", { post });
}

export function handleUpdateById (req: Request, res: Response) {
    const { id } = req.params
    const { title, content } = req.body

   updatePostById(Number(id) , title , content)
   res.redirect("/")
}