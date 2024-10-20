import React from "react";
import './Header.scss'
import { Link, NavLink } from "react-router-dom";
import { useInfoContext } from "../../context/infoContext";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

const Header = () => {
  const {theme, toggleTheme} = useInfoContext()

  return (
      <header className={theme === 'dark' ? "header" : "header-dark"}>
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                        <NavLink to='/' className="logo">
                                <img src="/images/logo.png" alt="logo_site" />
                        </NavLink>
                    <h2>EFFECT</h2>
                </div>
                <ul className="list">
                    <li to='/' className="items">
                        <button>Download</button>
                    </li>
                    <li to='/auth' className="items">
                        <button className="sign">Sign in</button>
                    </li>
                    <li to='/' className="items">
                    <input checked={theme === 'dark'} id="checkbox" type="checkbox" onChange={toggleTheme}/>
                    <label className="switch" htmlFor="checkbox">
                      {theme === 'dark' ? <LuSun /> : <BsMoonStars />}
                    </label>
                    </li>
                </ul>
            </nav> 
        </div>
      </header>
  );
};

export default Header;

