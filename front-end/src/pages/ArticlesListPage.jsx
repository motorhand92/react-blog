import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ArticlesListPage() {
  const content = useSelector((state) => state.content.contents);

  return (
    <div>
      <h1>Articles</h1>
      <div>
        {content.map((article) => (
          <Link key={article.id} to={`/articles/${article.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="article-sum">
              <img src={article.imageURL} alt="sumimg" className="article-sum-img" />
              <div className="article-sum-text">
                <h3>{article.name}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticlesListPage;
