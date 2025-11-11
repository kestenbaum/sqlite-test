import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";
import { createUserModel, findUserByEmailModel } from "../models/userModel";
import { CustomSessionUser } from "../types/express";

interface AuthenticatedRequest extends Request {
  session: Request['session'] & {
    user?: CustomSessionUser;
  };
}

export function showRegisterForm (req: Request, res: Response) {
    res.render("register.njk")
}

export function registerUser (req: Request, res: Response) {
    const { name, email, password } = req.body
    createUserModel(name, email, password)
    res.redirect("/")
}

export function showLoginForm (req: Request, res: Response) {
    res.render("login.njk")
}

export function loginUser (req: AuthenticatedRequest, res: Response) {
  const { email, password } = req.body;
  const user = findUserByEmailModel(email);
 
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.render("register.njk", { error: "Invalid credentials" });
  }

  req.session.user = {
    id: user.id,
    login: user.name,
    is_admin: user.is_admin,
  };

  console.log(req.session.user)

  res.redirect("/");
}

export function logoutUser (req: Request, res: Response) {
    req.session.destroy(() => res.redirect("/"))
}