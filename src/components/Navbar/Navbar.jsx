import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { getImageURL } from '../../utils'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        PORTFOLIO
      </a>

      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={
            menuOpen
            ? `/assets/nav/closeIcon.png`
            : `/assets/nav/menuIcon.png`
          }
          onClick={() => setMenuOpen(!menuOpen)}
          alt="Hamburger Menu" />
        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href={path === '/' ? '#about' : '/'} >About</a>
          </li>
          <li>
            <a href={path === '/' ? '#skills' : '/'}>Skills</a>
          </li>
          <li>
            <a href={path === '/' ? '#projects' : '/'}>Projects</a>
          </li>
          <li>
            <a href={path === '/' ? '#contact' : '/'}>Contact</a>
          </li>
          <li>
            <a href="/assets/resume/resume.pdf" download>Download Resume</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}