import React from 'react';
import styles from "./About.module.css";
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                   src="/about/aboutImage.png"
                   alt="Me sitting with a laptop" 
                   className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="/about/uiIcon.png" alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h1>Btech in Civil Engineering</h1>
                            <p>
                                I am currently studying in 2nd year of Civil Engineering from VNIT Nagpur
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="/about/serverIcon.png" alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h1>BS in Data Science and Applications</h1>
                            <p>
                                I am simultaneously pursuing online Bachelor's degree in Data Science and Applications from IIT Madras
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="/about/cursorIcon.png" alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h1>Web development and Programming</h1>
                            <p>
                                I am focused on web development with experience in multiple programming languages, currently building real-world projects.
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    );
};