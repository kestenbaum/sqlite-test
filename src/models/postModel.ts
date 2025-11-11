import db from "../db";

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string
}

export function getAllPosts (): Post[] {
    const stmt = db.prepare(`
    SELECT 
      posts.id,
      posts.title,
      posts.content,
      posts.created_at,
      users.name AS author
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY posts.created_at DESC
  `);
  return stmt.all() as Post[];
}

export function deletePostById (id: number) {
   const stmt = db.prepare("DELETE FROM posts WHERE id = ?")
   stmt.run(id)
}

export function createPost (title: string, content: string, userId: number) {
    const stmt = db.prepare("INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)")
    stmt.run(title, content, userId)
}

export function updatePostById (id: number, title: string, content: string ) {
    const stmt = db.prepare("UPDATE posts SET title = ?, content = ? WHERE id = ?")
    stmt.run(title, content, id)
}

export function getPostById (id: number) {
    const stmt = db.prepare("SELECT * FROM posts WHERE id = ?")
    return stmt.get(id)
}
