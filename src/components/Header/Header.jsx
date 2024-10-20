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
                    <div className="image">
                        <NavLink to='/' className="logo">
                            {theme === 'dark' ? <>
                                <img src="/images/haircut.png" alt="" />
                            </> : <>
                                <img src="/images/haircuts.png" alt="" />
                            </>}
                        </NavLink>
                    </div>  
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

