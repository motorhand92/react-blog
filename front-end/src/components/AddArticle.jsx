import { useRef } from "react";

const AddArticle = () => {
  const titleText = useRef();
  const contentText = useRef();

  function addArticle() {
    const titleValue = titleText.current.value;
    const contentValue = titleText.current.value;
  }

  return (
    <div className="account-content">
      <h3>Add Article</h3>
      <h4>Title</h4>
      <input ref={titleText} type="text" className="account-title" />
      <h4>Content</h4>
      <textarea ref={contentText} type="text" className="account-input" />
      <button className="account-button">Add</button>
    </div>
  );
};

export default AddArticle;
