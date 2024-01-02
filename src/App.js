import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import About from "./About";
import PostPage from "./PostPage";
import Footer from "./Footer";
import Missing from "./Missing";
import { DataProvider } from "./Context/DataContext";
import EditPage from "./EditPage";

function App() {
  return (
    <div className="App">
      <Header title={`Ashour's ReactJs Blog`} />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="newpost" Component={NewPost} />
          <Route path="about" Component={About} />
          <Route path="/postpage/:id" Component={PostPage} />
          <Route path="/editpage/:id" Component={EditPage} />
          <Route path="*" Component={Missing} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
