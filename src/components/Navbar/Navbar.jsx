import { useState } from 'react'
import styles from './Navbar.module.css'
// import { useLocation} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();
  // const path = location.pathname;


  return (
    <nav className={styles.navbar}>
      <div className={styles.title} href="/">
        <a href='/'>PORTFOLIO</a>
        <div className={styles.icons}>
          <a href="https://www.github.com/bishlam" target= "_blank">
            <img src="/assets/contact/githubIcon.png"  alt="githubIcon" height={30} width={30} />
          </a>
          <a href="https://www.linkedin.com/in/bishlam" target= "_blank">
            <img src="/assets/contact/linkedinIcon.png" alt="linkedinIcon" height={30} width={30} />
          </a>
        </div>
      </div>

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
            <HashLink to="/#about">About </HashLink>
            {/* <a href={path === '/' ? '#about' : '/'} >About</a> */}
          </li>
          <li>
          <HashLink to="/#skills">Skills </HashLink>
            {/* <a href={path === '/' ? '#skills' : '/'}>Skills</a> */}
          </li>
          <li>
          <HashLink to="/#projects">Projects </HashLink>
            {/* <a href={path === '/' ? '#projects' : '/'}>Projects</a> */}
          </li>
          <li>
          <HashLink to="/#contact">Contact </HashLink>
            {/* <a href={path === '/' ? '#contact' : '/'}>Contact</a> */}
          </li>
          <li>
            <a href="/assets/resume/bishonath_lamichhane_resume.pdf" download>Download Resume</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}