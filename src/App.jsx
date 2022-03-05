import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import { About } from "./pages/About";
import { Carts } from "./pages/Carts";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { User } from "./pages/User";
import {Phones} from "./pages/Phones"
import { Future } from "./pages/Future";
import { History } from "./pages/History";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
      </ul>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="/about/user" element={<User/>}>
            <Route path="/about/user/carts" element={<Carts/>}/>
            <Route path="/about/user/phones" element={<Phones/>}/>
            </Route>
          <Route path="/about/profile" element={<Profile/>} >
          <Route path="/about/profile/future" element={<Future/>}/>
          <Route path="/about/profile/history" element={<History/>}/>
            </Route>
          </Route>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
