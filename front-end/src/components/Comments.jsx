import { useRef } from "react";
import { useSelector } from "react-redux";
import CommentLike from "./CommentLike";
// import { updateComment } from "../features/contentSlice";
import axios from "axios";
import { useState, useEffect } from "react";

function Comments(props) {
  // const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const commentText = useRef();

  const [users, updateUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/api/users");
      const usersInfo = response.data;
      updateUsers(usersInfo);
    };
    loadUsers();
  }, []);

  const [contents, updateContents] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      const response = await axios.get("/api/articles");
      const articleInfo = response.data;
      updateContents(articleInfo);
    };
    loadContent();
  }, []);

  if (contents.length > 0 && users.length > 0) {
    const article = contents.find((article) => article.id === props.articleId);
    const commentsLength = article.comments.length;
    const articleIndex = contents.findIndex((a) => a.id === props.articleId);

    const user = users.find((user) => user.userId === userId);

    function submit() {
      if (isAuthenticated) {
        console.log(articleIndex);
        const comment = commentText.current.value;
        async function sendComment() {
          const response = await axios.post(`/api/articles/${props.articleId}/comment`, {
            id: commentsLength,
            user: userId,
            userAvatar: user.userAvatar,
            commentText: comment,
          });
          const commentInfo = response.data;
          updateContents(commentInfo);
        }
        sendComment();
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
}

export default Comments;
