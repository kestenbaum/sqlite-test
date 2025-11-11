import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import routes from "./router";
import session from "express-session";
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = Number(process.env.PORT) || 3001
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, 
      maxAge: 1000 * 60 * 60 * 24, 
    },
  })
);

const viewsPath = path.join(__dirname, "view");

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
