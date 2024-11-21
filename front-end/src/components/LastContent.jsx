import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentLike from "./CommentLike";

function LastContent() {
  const [contents, updateContents] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      const response = await axios.get("/api/articles");
      const articleInfo = response.data;
      updateContents(articleInfo);
    };
    loadContent();
  }, []);

  if (contents.length > 0) {
    const article = contents[0];
    const articleId = article.id;
    const articleText = article.content[0].substring(0, 150);

    return (
      <Link to={`/articles/${articleId}`} style={{ textDecoration: "none", color: "inherit", height: "100%" }}>
        <div className="article-wrap">
          <h3>Last Article</h3>
          <img className="article-image" src={article.imageURL} alt="" />
          <p>{articleText}...</p>
          <CommentLike articleId={articleId} />
        </div>
      </Link>
    );
  }
}

export default LastContent;
