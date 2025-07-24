import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { ContactForm } from "../ContactForm/ContactForm"; // Add this if you're using a ContactForm component

export const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Prachi</h1>
          <p className={styles.description}>
            I am currently pursuing a B.Tech in Civil Engineering at VNIT Nagpur,
            while simultaneously undertaking a Bachelor's degree in Data Science
            from IIT Madras
          </p>
          <a href="#" ></a>
          {/* OR if you want to open the form instead: */}
          <button onClick={() => setShowForm(true)} className={styles.contactBtn}>Contact Me</button> 
        </div>
        <img
          src="/hero/heroImage.png"
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </>
  );
};
