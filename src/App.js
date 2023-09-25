import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewBlog from "./Components/NewBlog";
import BlogDetails from "./Components/BlogDetail";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Router>
    <div className="m-0">
      <Navbar />
      <div className="max-w-screen-md my-10 mx-auto p-5 ">
        <Routes>
          <Route path="/" element = {< Home />} />
          <Route path="/create" element = {< NewBlog />} />
          <Route path="/blogs/:id" element = {<BlogDetails /> } />
          <Route path="*" element = {<ErrorPage /> } />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
