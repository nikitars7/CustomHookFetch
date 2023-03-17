import { Routes, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Albums from "./components/Albums";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Link className="Link" to="/posts">
        Posts
      </Link>
      <Link className="Link" to="/albums">
        Albums
      </Link>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default App;
