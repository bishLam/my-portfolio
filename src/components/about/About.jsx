import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
        className={styles.aboutImage}
          src="/assets/about/aboutImage.png" 
          alt="Me sitting with a laptop" />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile App Developer</h3>
              <p title='Scroll below for skills and projects based on mobile applications'>
                Passionate about building intuitive and scalable mobile applications using React Native, Kotlin, Swift, and .NET. Experienced with Firebase, Appwrite, and local databases (SQLite, Room) to deliver real-world solutions that enhance user experience.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Skilled in backend development with C#, Java, Node.js, and SQL databases (MySQL, PostgreSQL, MS SQL). Experienced in designing modular architectures, authentication systems, and API integrations to support reliable and secure applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX designer</h3>
              <p>
              Dedicated to crafting clean, user-friendly, and responsive designs with Figma and Material Design principles. Experienced in conducting usability testing and heuristic evaluations to create seamless, engaging user experiences.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}
