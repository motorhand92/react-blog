import express from "express";
import { MongoClient } from "mongodb";
import { fileURLToPath } from "url";
import path from "path";
import "dotenv/config";
// import { tempContent } from "./temp-content.js";
// import { tempUser } from "./temp-user.js";
// import { tempBio } from "./temp-bio.js";

async function start() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.jom8i.mongodb.net/`;
  const client = new MongoClient(url);

  await client.connect();
  const db = client.db("fsb");

  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("/^(?!/api).+/", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });

  app.get("/api/articles", async (req, res) => {
    const contents = await db.collection("contents").find({}).toArray();
    res.send(contents);
  });

  app.post("/api/articles/new", async (req, res) => {
    const body = req.body;
    await db.collection("contents").insertOne(body);
    const contents = await db.collection("contents").find({}).toArray();
    res.send(contents);
  });

  app.put("/api/articles/:articleId/like", async (req, res) => {
    const articleId = req.params.articleId;
    await db.collection("contents").updateOne(
      { id: articleId },
      {
        $inc: { like: 1 },
      }
    );
    const contents = await db.collection("contents").find({}).toArray();
    res.send(contents);
  });

  app.put("/api/articles/:articleId/unlike", async (req, res) => {
    const articleId = req.params.articleId;
    await db.collection("contents").updateOne(
      { id: articleId },
      {
        $inc: { like: -1 },
      }
    );
    const contents = await db.collection("contents").find({}).toArray();
    res.send(contents);
  });

  app.get("/api/users", async (req, res) => {
    const users = await db.collection("users").find({}).toArray();
    res.send(users);
  });

  // app.put("/api/users/:userId/avatar", (req, res) => {
  //   const userId = req.params.userId;
  //   const user = tempUser.find((user) => user.userId === userId);
  //   const avatar = req.body.userAvatar;
  //   user.userAvatar = avatar;
  //   res.send(tempUser);
  // });

  app.put("/api/users/:userId/password", async (req, res) => {
    const userId = req.params.userId;
    const password = req.body.password;
    await db.collection("users").updateOne(
      { userId: userId },
      {
        $set: { password: password },
      }
    );
    const users = await db.collection("users").find({}).toArray();
    res.send(users);
  });

  app.post("/api/users/new", async (req, res) => {
    const body = req.body;
    await db.collection("users").insertOne(body);
    const users = await db.collection("users").find({}).toArray();
    res.send(users);
  });

  app.get("/api/bio", async (req, res) => {
    const bio = await db.collection("bio").find({}).toArray();
    res.send(bio);
  });

  app.put("/api/bio/bioSum", async (req, res) => {
    const body = req.body.bioSum;
    await db.collection("bio").update({
      $set: { bioSum: body },
    });
    const bio = await db.collection("bio").find({}).toArray();
    res.send(bio);
  });

  // app.put("/api/bio/bioText/:id", (req, res) => {
  //   const id = req.params.id;
  //   const body = req.body.bioText;
  //   tempBio.bioText[id].text = body;
  //   res.send(tempBio);
  // });

  app.post("/api/articles/:articleId/comment", async (req, res) => {
    const articleId = req.params.articleId;
    const article = await db.collection("contents").findOne({ id: articleId });
    const body = req.body;
    await db.collection("contents").updateOne(
      { id: articleId },
      {
        $push: { comments: { $each: [body], $position: 0 } },
      }
    );
    const contents = await db.collection("contents").find({}).toArray();
    res.send(contents);
  });

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

start();
