import styles from "./Skills.module.css"
import skills from "../../data/skills.json"

export const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => {
              return <div key={index} className={styles.skill}>
                <div className={styles.imageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p className={styles.skillTitle}>{skill.title}</p>
              </div>
          }
          )}
        </div>
        <ul>

        </ul>
      </div>


    </section>
  )
}
