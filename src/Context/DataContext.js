import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3500/posts");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredPosts = posts
      .filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
      .reverse();
    setSearchResult(filteredPosts);
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
