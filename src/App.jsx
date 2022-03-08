import { NavLink, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import {Users} from "./pages/Users";


function App() {
  return (
    <div className="App flex justify-center items-center pt-52 gap-1.5">
      <ul className="block justify-start items-center gap-1 w-72 bg-sky-500  text-center">
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/settings'>Settings</NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
