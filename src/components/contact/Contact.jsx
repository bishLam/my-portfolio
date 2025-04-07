import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me if you have any questions or just want to chat!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt=" Mail Icon" />
          <a href="mailto:biswanathlamichhane@gmail.com">biswanathlamichhane@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
          <a target='_blank' href="https://www.linkedin.com/in/bishLam">linkedin.com/bishLam</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a target='_blank' href="https://github.com/bishLam">github.com/bishLam</a>
        </li>

      </ul>
    </footer>
  )
}
