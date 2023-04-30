import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={`${styles.heroWrapper}`}>
        <div className={styles.heroBgContainer}>
          <Image src="/hero/hero-bg.svg" fill objectFit="cover" />
        </div>

        <div className={`${styles.hero}`}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroMain}>
              <h1>Summer of Innovation 2023</h1>
              <div className={styles.heroQuoteWrapper}>
                <div className={styles.styleBar}></div>
                <div className={styles.Quote}>Write your quote here</div>
              </div>
            </div>
            <div className={styles.heroArtWrapper}>
              <Image src="/hero/hero-art.svg" layout="fill" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={`page-wrapper`}>
          <div className={styles.aboutMain}>
            <div className={styles.aboutStyleStar}>
              <Image src="/hero/style-star.svg" layout="fill" />
            </div>
            <div className={styles.aboutTitle}>
              <h1>Overview</h1>
            </div>
            <div className={styles.aboutContent}>
              The third edition of Summer of Innovation is a platform for honing
              one’s technical skills and promoting tech culture in our
              institute. Lasting 3 months, the event comprises of problem
              statements from multiple domains and the participants are allowed
              to take part in any number of them. The event is a result of the
              contribution of about every technical organization involved with
              tech in our institute. This year, the event shall last from 23th
              of May to 11th of August, for a period of 3 months allowing the
              participants to learn the required technical skills from scratch
              and then implementing them in this period.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
