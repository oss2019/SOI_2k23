import { useState, useEffect } from "react";
import styles from "./AppBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AppBar({ current }) {
  const [active, setActive] = useState(false);

  //implement nav bar hide
  const [visible, setVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = previousScrollPosition > currentScrollPos;

      setPreviousScrollPosition(currentScrollPos);
      setVisible(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScrollPosition]);

  const hamBurgerClick = () => {
    setActive(!active);
  };

  const handleClickScroll = () => {
    const element = document.getElementById("eventsId#123");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="homeId#69">
      <nav
        className={styles.navBarWrapper}
        style={{ top: visible ? 0 : "-6rem" }}
      >
        <div className={styles.navBarMain}>
          <div className={styles.logoWrapper}>
            {/* <h1>SOI</h1> */}
            <Image
              src="/SOI-logo.png"
              width={80}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.optionsWrapper}>
            <div
              className={`${styles.optionsMenu} ${
                active && styles.activeSidebar
              }`}
            >
              <div className={styles.option}>
                <Link href="/">
                  <div>Home</div>
                </Link>
              </div>
              <div className={styles.option}>
                <div onClick={handleClickScroll}>Events</div>
              </div>
              <div className={styles.option}>
                <div>Timeline</div>
              </div>
              <div className={styles.option}>
                <Link href="/team">
                  <div>Team</div>
                </Link>
              </div>
              <div className={styles.option}>
                <div>Contact</div>
              </div>
            </div>
            <div className={styles.hamBurgerWrapper}>
              <div
                className={`${styles.hamburger} ${
                  active ? styles.active : styles["not-active"]
                }`}
                onClick={hamBurgerClick}
              >
                <span className={styles.spans}></span>
                <span className={styles.spans}></span>
                <span className={styles.spans}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
