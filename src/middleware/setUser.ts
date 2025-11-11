import { Request, Response, NextFunction } from "express";

export function setUser(req: Request, res: Response, next: NextFunction) {
  res.locals.user = req.session.user || null;
  next();
}
