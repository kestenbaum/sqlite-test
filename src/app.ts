import { Request, Response } from "express";
import express from "express";
import nunjucks from "nunjucks";
import path from "path";

const app = express();

nunjucks.configure(path.join(__dirname, "view"), {
  autoescape: true,
  express: app,
});

app.get("/", (req: Request, res: Response) => {
    res.render("index.njk")
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});