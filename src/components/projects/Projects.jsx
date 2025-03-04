import React from 'react'
import projects from "../../data/projects.json"
import styles from "./Projects.module.css"
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <h3 className={styles.subTitle}>Check out some of my recent projects</h3>
      <div className={styles.projects}>
        {
          projects.map((project, index) => {
            return (
              <ProjectCard key={index} project={project} />
            )
          })
        }
      </div>
    </section>
  )
}