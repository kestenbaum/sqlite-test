import { Request, Response } from "express";
import { createPost, deletePostById, getAllPosts } from "./postModel";

export function listPosts (req: Request, res: Response) {
    const posts = getAllPosts()
    res.render("index.njk", { posts })
}

export function showNewPostForm (req: Request, res: Response) {
    res.render("form.njk")
}

export function handleDeletePost (req: Request, res:Response) {
    const { id } = req.params
    deletePostById(id)
    res.redirect("/")
}

export function handleCreatePost (req: Request, res: Response) {
    const { title,  content }= req.body as { title: string, content: string }
    createPost(title, content);
    res.redirect("/")
}