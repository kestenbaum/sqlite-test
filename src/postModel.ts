import db from "./db";

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string
}

export function getAllPosts (): Post[] {
    const stmt = db.prepare("SELECT * FROM posts ORDER BY created_at DESC")
    return stmt.all() as Post[]
}

export function deletePostById (id: string) {
   const stmt = db.prepare("DELETE FROM posts WHERE id = ?")
   stmt.run(id)
}

export function createPost (title: string, content: string): void {
    const stmt = db.prepare("INSERT INTO posts (title, content) VALUES (?, ?)")
    stmt.run(title, content)
}