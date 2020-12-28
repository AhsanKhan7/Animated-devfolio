import React from 'react'
import styles from './Landing.module.scss'

const Landing = () => {
    return (
      <div className={styles.landing}>
          <section className={styles.addict}><p>CODING  ADDICT</p></section>
          <section className={styles.intro}><h3>Hey, I,m Ahsan, Front-end react and MERN developer, focused on crafting polished user experiences and modern web apps</h3><h5>Ahsandev.pro@gmail.com</h5></section>
          <section className={styles.profilePic}><img src='https://images.unsplash.com/photo-1609058745811-2e87ab15790a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80' alt='DP' /></section>
      </div>
    )
}

export default Landing
