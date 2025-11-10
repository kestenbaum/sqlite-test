import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import routes from "./router";

const app = express();

app.use(express.urlencoded({ extended: true }));

const viewsPath = path.join(__dirname, "view");

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
});

app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
