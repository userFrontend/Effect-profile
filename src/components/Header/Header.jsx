import React, { useState } from "react";
import './Header.scss'
import { Link, NavLink } from "react-router-dom";
import { useInfoContext } from "../../context/infoContext";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { FaRegSun } from "react-icons/fa";

const Header = () => {
  const {handleLanguageChange, theme, toggleTheme} = useInfoContext()
    const [openlang, setOpenlang] = useState(false);
  
    // Toggle dropdown on click
    const toggle = () => setOpenlang(!openlang);


  return (
      <header className={theme === 'dark' ? "header" : "header-dark"}>
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                        <Link to='/' className="logo">
                                <img src="/images/logo.png" alt="logo_site" />
                        </Link>
                    <h2>EFFECT</h2>
                </div>
                <div className="options">
                <div className="change">
                  <div className="lang">
                    <div onClick={toggle} className="lang-img">
                      <img src={`/images/${localStorage.getItem('language') || 'ru'}.svg`} alt='language' />
                    </div>
                  </div>
                  {openlang && (
                    <div className="box-lang">
                        <div className='lang' onClick={() => {toggle(); handleLanguageChange('en')}}>
                          <div className="lang-img">
                            <img src={`/images/en.svg`} alt="English" />
                          </div>
                          <b>English</b>
                        </div>
                        <div className='lang' onClick={() => {toggle(); handleLanguageChange('ru')}}>
                          <div className="lang-img">
                            <img src={`/images/ru.svg`} alt="Russian" />
                          </div>
                          <b>Русскый</b>
                        </div>
                        <div className='lang' onClick={() => {toggle(); handleLanguageChange('uz')}}>
                          <div className="lang-img">
                            <img src={`/images/uz.svg`} alt="O'zbek" />
                          </div>
                          <b>O'zbek</b>
                        </div>
                    </div>
                  )}
                </div>
                  <input checked={theme === 'dark'} onChange={toggleTheme} type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="switch">
                    {theme === 'dark' ? <FaRegSun /> : <BsMoonStars />}
                    {/* {theme === 'dark' ? "Dark" : "Light"} */}
                  </label>
                </div>                
            </nav> 
        </div>
      </header>
  );
};

export default Header;

