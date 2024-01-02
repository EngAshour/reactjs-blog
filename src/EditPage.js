import { useContext, useEffect, useState } from "react";
import DataContext from "./Context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const EditPage = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post]);

  const handleEdit = async (id) => {
    try {
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const editedPost = {
        id: id,
        title: editTitle,
        datetime: datetime,
        body: editBody,
      };
      const response = await axios.put(
        `http://localhost:3500/posts/${post.id}`,
        editedPost
      );
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="NewPost">
      <h2>Edit Post</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          type="text"
          required
          placeholder="Put Your Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Your Post:</label>
        <textarea
          id="postBody"
          placeholder="What do you wanna post"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type="submit" onClick={() => handleEdit(post.id)}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default EditPage;
