import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./Context/DataContext";
const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="searchForm">Search For Post</label>
        <input
          id="search"
          type="text"
          placeholder="Search For Post"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/newpost"}>New Post</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
