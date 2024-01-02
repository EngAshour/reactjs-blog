import { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./Context/DataContext";

const Home = () => {
  const { isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {!isLoading ? (
        <Feed />
      ) : (
        <p style={{ color: "red" }}>Loading the Posts from server ...</p>
      )}
    </main>
  );
};

export default Home;
