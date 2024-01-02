import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataContext from "./Context/DataContext";
import axios from "axios";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3500/posts/${id}`);
      const newPosts = posts.filter((post) => post.id.toString() !== id);
      console.log(newPosts);
      setPosts(newPosts);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="PostPage">
      <p>{post.title}</p>
      <p>{post.datetime}</p>
      <p>{post.body}</p>
      <Link to={`/editpage/${post.id}`}>
        <button className="editButton">Edit</button>
      </Link>
      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </article>
  );
};

export default PostPage;
