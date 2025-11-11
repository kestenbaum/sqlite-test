import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: CustomSessionUser;
  }
}

export interface CustomSessionUser {
    id: number;
    name: string;
}