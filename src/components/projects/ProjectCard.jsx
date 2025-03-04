import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import styles from "./ProjectCard.module.css"
import { ProjectDetail } from './ProjectDetails/ProjectDetail'

export const ProjectCard = ({ project: { ID, imageSrc, title, description, demoLink, sourceLink, skills } }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate('/projectDetails', {state: {id: `${ID}`, title: `${title}`}})}>
      <div>
        <img className={styles.image} src={imageSrc} alt={`${title} image`} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {
            skills.map((skill, index) => {
              return <li className={styles.skill} key={index}>
                {skill}
              </li>
            }
            )}
        </ul>
      </div>
      <div className={styles.links}>
        <a className={styles.link} target='_blank' href={demoLink}>Demo</a>
        <a className={styles.link} target='_blank' href={sourceLink}>Source</a>
      </div>
    </div>
  )
}
