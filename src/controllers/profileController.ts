import { Request, Response } from "express";
import { findUserById } from "../models/userModel";

export function profileController(req: Request, res: Response) {
  const { id } = req.params;
  const user = findUserById(Number(id));

  const sessionUser = req.session.user;
  if (!sessionUser) {
    return res.redirect("/login");
  }

  if (Number(id) !== sessionUser.id) {
    return res.redirect(`/profile/${sessionUser.id}`);
  }

  if (!user) {
    return res.status(404).render("login.njk", { error: "User not found" });
  }

  res.render("profile.njk", { user });
}

export function checkedSessionUser (req: Request, res: Response) {
  const userId = req.session.user?.id;
  if (!userId) return res.redirect("/login");
  return res.redirect(`/profile/${userId}`);
}

