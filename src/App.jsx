import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Authors } from "./pages/Authors";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Home } from "./pages/Home";


function App() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setBlogs(json))
  }, [])
  
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/blogs'>Blogs</NavLink>
        </li>
        <li>
        <NavLink to='/authors'>Authors</NavLink>
        </li>
      </ul>
      <div >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs blogs={blogs} />} />
          <Route path="/blogs/:id" element={<Blog blogs={blogs}/>}/>
          <Route path="/authors" element={<Authors/>}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
