import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import styles from "./ProjectDetail.module.css"
import projects from "../../../data/projects.json"
import { Navbar } from '../../Navbar/Navbar'
import { Contact } from '../../contact/Contact'

export const ProjectDetail = (props) => {
  const location = useLocation();
  const id = location.state?.id;
  const project = projects.filter(project => project.ID === id)[0];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (<>
    <Navbar />
    <div className={styles.container}>
      <div className={project.highlights.layout === "landscape" ? styles.topHorizontal : styles.top}>
        <div className={styles.topLeft}>
          <div>
            <div className={styles.titleContainer}>
              <h1>{project.title}</h1>
              <a href={project.sourceLink} target='_blank'>
                <img src="/assets/contact/githubIcon.png" alt={`Github icon for project source "${project.title}"`} />
              </a>
            </div>
            <ul className={styles.techLists}>
              {/* displays the techs used in the project */}
              {project.techs.map((tech, index) => {
                return <li key={index}>{tech}</li>
              })
              }
            </ul>
          </div>
          <div className={styles.descriptionContainer}>
            <h2>Project Details</h2>
            <p>{project.detailedDescription}</p>
          </div>
        </div>
        <div className={project.highlights.layout === "phone" ? styles.topRight : styles.topRightHorizontal}>
          <video autoPlay muted loop playsInline>
            <source src={project.highlights.src} type={`video/${project.highlights.type}`} />
            Your browser does not support this video
          </video>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <ul className={project.highlights.layout === "phone" ? styles.imageList : styles.imageListHorizontal}>
          {project.screenshots.map((imagePath, index) => {
            return <li key={index} >
              <img src={imagePath} alt="project demo screenshot" />
            </li>
          })}
          </ul>
      </div>

      {/* Covers the detailed video of the project */}
      <div className={styles.bottomSection}>
        <div className={styles.demoVideo}>
          <h2>Detailed Video Demo</h2>
          <iframe allowFullScreen src={project.demoLink} style={project.highlights.layout === "landscape" ? {height: 600, width : 1000} : {height: 600, width : 500}}></iframe>
        </div>
        <div className={styles.sourceContainer}>
          <h2>Project Links</h2>
          {/* to make the buttons dynamic */}
          {project.links.map((link, index) => {
            return <a target='_blank' href={link.source}><span>{link.name}</span> <img src={link.Logo} alt={`${link.name} logo`} width="30" height="30" /></a>
          })}
        </div>
      </div>

    </div>

    <Contact />
  </>
  )
}


