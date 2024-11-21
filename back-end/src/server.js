import express from "express";
import { tempContent } from "./temp-content.js";
import { tempUser } from "./temp-user.js";
import { tempBio } from "./temp-bio.js";

const app = express();
app.use(express.json());

app.get("/api/articles", (req, res) => {
  res.send(tempContent);
});

app.put("/api/articles/:articleId/like", (req, res) => {
  const articleId = req.params.articleId;
  const article = tempContent.find((article) => article.id === articleId);
  article.like = article.like + 1;
  res.send(tempContent);
});

app.put("/api/articles/:articleId/unlike", (req, res) => {
  const articleId = req.params.articleId;
  const article = tempContent.find((article) => article.id === articleId);
  article.like = article.like - 1;
  res.send(tempContent);
});

app.get("/api/users", (req, res) => {
  res.send(tempUser);
});

app.put("/api/users/:userId/avatar", (req, res) => {
  const userId = req.params.userId;
  const user = tempUser.find((user) => user.userId === userId);
  const avatar = req.body.userAvatar;
  user.userAvatar = avatar;
  res.send(tempUser);
});

app.put("/api/users/:userId/password", (req, res) => {
  const userId = req.params.userId;
  const user = tempUser.find((user) => user.userId === userId);
  const password = req.body.password;
  user.password = password;
  res.send(tempUser);
});

app.post("/api/users/new", (req, res) => {
  const body = req.body;
  tempUser.push(body);
  res.send(tempUser);
});

app.get("/api/bio", (req, res) => {
  res.send(tempBio);
});

app.put("/api/bio/bioSum", (req, res) => {
  const body = req.body.bioSum;
  tempBio.bioSum = body;
  res.send(tempBio);
});

app.put("/api/bio/bioText/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body.bioText;
  tempBio.bioText[id].text = body;
  res.send(tempBio);
});

app.post("/api/articles/:articleId/comment", (req, res) => {
  const articleId = req.params.articleId;
  const article = tempContent.find((article) => article.id === articleId);
  const body = req.body;
  article.comments.unshift(body);
  res.send(tempContent);
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
