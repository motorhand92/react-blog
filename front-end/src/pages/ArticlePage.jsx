import Article from "../components/Article";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFoundPage from "./NotFoundPage";

function ArticlePage() {
  const { articleId } = useParams();
  const contents = useSelector((state) => state.content.contents);
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
