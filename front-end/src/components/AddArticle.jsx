import { useSelector } from "react-redux";
import { useRef } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  const userId = useSelector((state) => state.auth.userId);

  const navigate = useNavigate();

  const titleText = useRef();
  const content1Text = useRef();
  const content2Text = useRef();
  const content3Text = useRef();
  const content4Text = useRef();
  const content5Text = useRef();
  const content6Text = useRef();
  const content7Text = useRef();
  const content8Text = useRef();
  const content9Text = useRef();
  const content10Text = useRef();
  const imageUrlText = useRef();
  const articleIdText = useRef();

  const [imageURL, updateImageURL] = useState();

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
    function addArticle() {
      const titleValue = titleText.current.value;
      const content1Value = content1Text.current.value;
      const content2Value = content2Text.current.value;
      const content3Value = content3Text.current.value;
      const content4Value = content4Text.current.value;
      const content5Value = content5Text.current.value;
      const content6Value = content6Text.current.value;
      const content7Value = content7Text.current.value;
      const content8Value = content8Text.current.value;
      const content9Value = content9Text.current.value;
      const content10Value = content10Text.current.value;
      const imageUrlValue = imageUrlText.current.value;
      const articleIdValue = articleIdText.current.value;

      if (titleValue && content1Value && imageUrlValue) {
        async function add() {
          const today = new Date();
          const date = today.getDate();
          const year = today.getFullYear();
          const month = today.getMonth();
          const fullDate = date + "." + month + "." + year;

          const response = await axios.post("/api/articles/new", {
            author: userId,
            id: articleIdValue,
            name: titleValue,
            date: fullDate,
            imageURL: imageUrlValue,
            like: 0,
            content: [
              content1Value,
              content2Value,
              content3Value,
              content4Value,
              content5Value,
              content6Value,
              content7Value,
              content8Value,
              content9Value,
              content10Value,
            ],
            comments: [],
          });
          const updatedContents = response.data;
          updateContents(updatedContents);
        }
        add();
        if (window.confirm("Are you sure with your entries?")) {
          alert("Article succesfully added!");
          navigate("/");
        }
      } else {
        alert("Please fill all the necessary spaces, then press add button!");
      }
    }

    function updateImage() {
      updateImageURL(imageUrlText.current.value);
    }

    return (
      <div className="account-content">
        <h3>Add Article</h3>
        <img src={imageURL} alt="" />
        <h4>Title</h4>
        <input ref={titleText} type="text" className="account-title" />
        <h4>Content</h4>
        <h5>Paragraph 1</h5>
        <textarea ref={content1Text} type="text" className="account-paragraph" />
        <h5>Paragraph 2</h5>
        <textarea ref={content2Text} type="text" className="account-paragraph" />
        <h5>Paragraph 3</h5>
        <textarea ref={content3Text} type="text" className="account-paragraph" />
        <h5>Paragraph 4</h5>
        <textarea ref={content4Text} type="text" className="account-paragraph" />
        <h5>Paragraph 5</h5>
        <textarea ref={content5Text} type="text" className="account-paragraph" />
        <h5>Paragraph 6</h5>
        <textarea ref={content6Text} type="text" className="account-paragraph" />
        <h5>Paragraph 7</h5>
        <textarea ref={content7Text} type="text" className="account-paragraph" />
        <h5>Paragraph 8</h5>
        <textarea ref={content8Text} type="text" className="account-paragraph" />
        <h5>Paragraph 9</h5>
        <textarea ref={content9Text} type="text" className="account-paragraph" />
        <h5>Paragraph 10</h5>
        <textarea ref={content10Text} type="text" className="account-paragraph" />
        <h4>Image Url</h4>
        <input ref={imageUrlText} type="text" className="account-title" />
        <button onClick={updateImage} className="account-button">
          Update
        </button>
        <h4>Article Id (Please all lower case without spaces)</h4>
        <input ref={articleIdText} type="text" className="account-title" />
        <button onClick={addArticle} className="account-button">
          Add
        </button>
      </div>
    );
  }
};

export default AddArticle;
