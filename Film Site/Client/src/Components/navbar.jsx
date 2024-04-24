import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Navbar({searchFilms}) {
const [searchMovie, setSearchMovie] = useState()
const searched=(e)=>{
  e.preventDefault()
  searchFilms(searchMovie)
}
  return (
    <div className="navigation">
      <div className="col-lg-2"><h1 className="company-name">Star <span>Film</span></h1></div>
      <div className="col-lg-4">
        <ul className="nav-menu">
          <li>
            <Link to='/' className="menu-items">Home</Link>
          </li>
          <li>
            <a href="#" className="menu-items">About</a>
          </li>
          <li>
            <Link to='/list' className="menu-items">List</Link>
          </li>
          <li>
            <a href="#" className="menu-items">Contact</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2">
        <form className="search-form" onSubmit={searched}>
          <input type="search"  id="search-input" placeholder="Search Film"  onChange={(e)=>setSearchMovie(e.target.value)}/>
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
