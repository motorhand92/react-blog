import { useSelector, useDispatch } from "react-redux";
import { increaseLike, decreaseLike } from "../features/contentSlice";

function CommentLike(props) {
  const contents = useSelector((state) => state.content.contents);
  const dispatch = useDispatch();

  const article = contents.find((a) => a.id === props.articleId);
  const articleIndex = contents.findIndex((a) => a.id === props.articleId);

  function handleLikeClick() {
    const button = document.getElementById("like-button");

    if (button.className === "icons") {
      dispatch(increaseLike(articleIndex));
      // alert("You liked the article!");
      button.classList.add("icons-clicked");
    } else if (button.className === "icons icons-clicked") {
      dispatch(decreaseLike(articleIndex));
      // alert("You unliked this article!");
      button.classList.remove("icons-clicked");
    }
  }

  return (
    <div className="comment-like-wrap">
      <div className="comment-like">
        <h5 style={{ fontWeight: "bold" }}>Author:</h5>
        <h5>{article.author}</h5>
      </div>
      <div className="comment-like">
        <img
          id="comment-button"
          className="icons"
          src="https://cdn4.iconfinder.com/data/icons/flatified/512/messages.png"
          alt="comment-icon"
        />
        <h5 style={{ marginLeft: "5px", marginRight: "20px" }} refresh="true">
          {article.comments.length}
        </h5>
        <img
          id="like-button"
          className="icons"
          src="https://cdn-icons-png.freepik.com/512/833/833472.png?ga=GA1.1.2109177720.1716898140"
          alt="like-icon"
          onClick={handleLikeClick}
        />
        <h5 style={{ marginLeft: "5px" }}>{article.like}</h5>
      </div>
    </div>
  );
}

export default CommentLike;
