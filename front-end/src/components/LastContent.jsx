import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentLike from "./CommentLike";

function LastContent() {
  const contents = useSelector((state) => state.content.contents);
  const article = contents[0];
  const articleId = article.id;
  const articleText = article.content[0].substring(0, 150);

  return (
    <Link to={`/articles/${article.id}`} style={{ textDecoration: "none", color: "inherit", height: "100%" }}>
      <div className="article-wrap">
        <h3>Last Article</h3>
        <img className="article-image" src={article.imageURL} alt="" />
        <p>{articleText}...</p>
        <CommentLike articleId={articleId} />
      </div>
    </Link>
  );
}

export default LastContent;
