import { useContext } from "react";
import DataContext from "./Context/DataContext";
import Post from "./Post";

const Feed = () => {
  const { searchResult: posts } = useContext(DataContext);
  return (
    <>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
