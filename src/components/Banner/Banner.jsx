import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hello! I'm Bishonath</h1>
          <p className={styles.description}>I am a Software developer / Mobile Application developer. Reach out if you would like to learn more about me or are interested to collaborate.</p>
          <a className={styles.contactMedium} href="mailto:biswanathlamichhane@gmail.com">Contact me</a>
        </div>
        <img className={styles.bannerImage} src={`/assets/hero/heroImage.png`} alt="" />
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>
    </section>
  )
}
