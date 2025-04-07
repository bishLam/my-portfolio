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
              <h3>Frontend Developer</h3>
              <p title='Scroll below for skills and projects based on frontend applications'>
                Passionate front end developer focused on designing beautiful and responsive websites. Some frontend skills includes CSS, Bootstrap, React, Javascript
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Experienced in backend development with Node.js, Java, Swift, C#, C++, and more. Explore the skills and projects section to see backend work.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX designer</h3>
              <p>
              Passionate about crafting visually appealing and user-friendly designs for websites and mobile applications. Focused on creating seamless and engaging user experiences. Check out the skills and projects section to explore past work.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}
