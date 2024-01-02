import { useContext, useState } from "react";
import DataContext from "./Context/DataContext";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { posts, setPosts } = useContext(DataContext);

  const navigate = useNavigate();

  const handleNewPost = async (e) => {
    try {
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const newPost = { id: id, title: title, datetime: datetime, body: body };
      await axios.post(`http://localhost:3500/posts`, newPost);
      const allPosts = [...posts, newPost];
      setPosts(allPosts);
      setTitle("");
      setBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="NewPost">
      <form className="newPostForm">
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          placeholder="Put Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="postBody">Your Post</label>
        <textarea
          placeholder="What do you wanna post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={handleNewPost}>Post</button>
      </form>
    </main>
  );
};

export default NewPost;
