import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

function Article() {
  const { articleId } = useParams();
  // const contents = useSelector((state) => state.content);
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
    const article = contents.find((article) => article.id === articleId);
    return (
      <>
        <div className="article-content">
          <h1>{article.name}</h1>
          <img src={article.imageURL} alt="articleimg" />
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </>
    );
  }
}

export default Article;
