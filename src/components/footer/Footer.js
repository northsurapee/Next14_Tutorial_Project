import React from 'react'
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>northSurapee</div>
      <div className={styles.text}>
        northSurapee creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}
