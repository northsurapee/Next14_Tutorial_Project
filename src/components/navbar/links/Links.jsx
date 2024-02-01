"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import NavLink from './navLink/navLink';
import styles from "./links.module.css";
import Image from 'next/image';

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
      <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
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
