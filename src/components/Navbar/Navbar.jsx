import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils";
export const Navbar = ()=>{
    const [menuOpen , setMenuOpen]=useState(false);
    return (
    <nav className={styles.navbar}>
     <a className={styles.title} href="/">Nada Shoukry</a>
     <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl("menuIcon.png")} alt="menu-button" 
        onClick={()=>setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>setMenuOpen(false)}>
            <li>
                <a href="#education">Education</a>
            </li>
            {/* <li>
                <a href="#skills">Skills</a>
            </li> */}
            <li>
                <a href="#experience">Experience</a>
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
    )
}