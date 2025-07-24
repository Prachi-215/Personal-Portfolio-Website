import React from "react";
import styles from "./Contact.module.css";
import emailIcon from '../../assets/contact/emailIcon.png';
import githubIcon from '../../assets/contact/githubIcon.png';
import linkedinIcon from '../../assets/contact/linkedinIcon.png';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email Icon" />
          <a href="mailto:prachirakshak02@gmail.com">prachirakshak02@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/myname">linkedin-myname</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github Icon" />
          <a href="https://github.com/Prachi-215">github-Prachi-215</a>
        </li>
      </ul>
    </footer>
  );
};
