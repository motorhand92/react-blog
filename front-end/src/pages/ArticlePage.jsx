import Article from "../components/Article";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
// import { useSelector } from "react-redux";

function ArticlePage() {
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
  const content = contents.find((content) => content.id === articleId);
  if (content) {
    return (
      <div className="article-content-wrap">
        <Article />
        <Comments articleId={articleId} />
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
}

export default ArticlePage;
