import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import routes from "./router";
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = Number(process.env.PORT) || 3001
const app = express();

app.use(express.urlencoded({ extended: true }));

const viewsPath = path.join(__dirname, "view");

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
});

app.use("/", routes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
