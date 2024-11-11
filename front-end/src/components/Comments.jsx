import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentLike from "./CommentLike";
import { updateComment } from "../features/contentSlice";
// import { updateContentAvatar } from "../features/contentSlice";

function Comments(props) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const users = useSelector((state) => state.user.users);
  const contents = useSelector((state) => state.content.contents);

  const article = contents.find((article) => article.id === props.articleId);
  const commentsLength = article.comments.length;
  const articleIndex = contents.findIndex((a) => a.id === props.articleId);

  for (let i = 0; i < commentsLength; i++) {
    const commentUser = users.find((user) => user.userId === article.comments[i].user);
    console.log(commentUser);
    const avatar = commentUser.userAvatar;
    // dispatch(updateContentAvatar([articleIndex, i, avatar])); // burası için bir get request veya post request çalıştırmak gerekebilir.
  }

  const user = users.find((user) => user.userId === userId);

  // console.log(article);
  // console.log(users);
  // console.log(articleIndex);

  const commentText = useRef();

  function submit() {
    if (isAuthenticated) {
      const comment = commentText.current.value;
      dispatch(updateComment([articleIndex, commentsLength, userId, user.userAvatar, comment]));
    } else {
      alert("First, please sign in!");
    }
    commentText.current.value = "";
  }

  return (
    <div className="comments-wrap">
      <CommentLike articleId={props.articleId} />
      <h3>Comments</h3>
      <div className="comment-container">
        <input ref={commentText} type="text" style={{ marginRight: "20px", width: "100%", paddingLeft: "16px" }} />
        <button onClick={submit}>Send</button>
      </div>
      {article.comments.map((comment) => (
        <div key={comment.id} className="comments">
          <div className="comment">
            <img src={comment.userAvatar} alt="avatar" style={{ width: "60px" }} />
            <h5 style={{ marginLeft: "10px", width: "100px", fontWeight: "bold" }}>{comment.user}</h5>
          </div>
          <div>
            <h5 className="comment-text">{comment.commentText}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
