import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Missing from "./Missing";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title={`Ashour's ReactJs Blog`} />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
