import { Request, Response, NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session.user) {
    return next();
  } else {
    console.log("User not authorized, redirecting...");
    return res.redirect("/login");
  }
}
