import { useState } from 'react'
import styles from './AppBar.module.css'

export default function AppBar({ current }) {
  const [active, setActive] = useState(false)
  const hamBurgerClick = () => {
    setActive(!active)
  }
  return <>
    <nav className={styles.navBarWrapper}>
      <div className={styles.navBarMain}>
        <div className={styles.logoWrapper}>
          <h1>SOI</h1>
        </div>
        <div className={styles.optionsWrapper}>
          <div className={`${styles.optionsMenu} ${active && styles.activeSidebar}`}>
            <div className={styles.option}>
              <div>
                Home
              </div>
            </div>
            <div className={styles.option}>
              <div>Events</div>
            </div>
            <div className={styles.option}>
              <div>
                Timeline
              </div>
            </div>
            <div className={styles.option}>
              <div>
                Team
              </div>
            </div>
            <div className={styles.option}>
              <div>
                Contact
              </div>
            </div>

          </div>
          <div className={styles.hamBurgerWrapper}>
            <div className={`${styles.hamburger} ${active ? styles.active : styles['not-active']}`} onClick={hamBurgerClick}>
              <span className={styles.spans}></span>
              <span className={styles.spans}></span>
              <span className={styles.spans}></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
}
