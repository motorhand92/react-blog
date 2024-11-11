import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Article() {
  const { articleId } = useParams();
  const contents = useSelector((state) => state.content.contents);
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

export default Article;
