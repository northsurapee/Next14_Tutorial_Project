"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import NavLink from './navLink/navLink';
import styles from "./links.module.css";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function Links() {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {
          links.map((link) => (
            <NavLink link={link} key={link.title}/>
          ))
        }
        {
          session ? (
            <>
              {isAdmin && (<NavLink link={{title: "Admin", path: "/admin"}}/>)}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink link={{title: "Login", path: "/login"}}/>
          )
        }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {
        open && <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.title}/>
          ))}
        </div>
      }
    </div>
  )
}
