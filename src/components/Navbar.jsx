import React, {useState} from "react";
import styles from "./Navbar.module.css"; 
import { getImageUrl } from "../utils";  
export const Navbar = () => {
    const [menuOpen,setMenuopen] = useState(false);
    return (
    <nav className={styles.navbar}>
        <a className= {styles.title} href="/">
        Portfolio</a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                    src={
                        menuOpen 
                            ? "/nav/closeIcon.png"
                            : "/nav/menuIcon.png"
                        }
                        alt="menu-button" 
                        onClick={() => setMenuopen(!menuOpen)}
                />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuopen(false)}>

                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li> 

            </ul>
        </div>
    </nav>
    );
};
