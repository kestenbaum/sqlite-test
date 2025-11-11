import bcrypt from "bcrypt";
import db from "../db";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export function createUserModel(name: string, email: string, password: string) {
  const hash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
  const result = stmt.run(name, email, hash);

  return {
    id: result.lastInsertRowid as number,
    name,
    email,
  };
}

export function findUserByEmailModel (email: string): User | undefined {
    const stmt = db.prepare("SELECT * FROM users WHERE email = ?")
    const user = stmt.get(email);
    return user as User | undefined;
}

export function findUserById (id: number) {
  const stmt = db.prepare("SELECT * FROM users WHERE id = ?")
  return stmt.get(id);
}