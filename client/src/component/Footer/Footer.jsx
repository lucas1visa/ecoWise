import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
      <h5>EcoWise</h5>
      <h6>Copyright © 2023 EcoWise Project</h6>
      <h6>Copyright © 2023 EcoWise project.vercel.app</h6>
      <section className={styles.socialMedia}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="ecoWise@gmail.com"
          target="_top"
        >
          <img src={email} alt="email" />
        </a>
      </section>
    </footer>
    );
};