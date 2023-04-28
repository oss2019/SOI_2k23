import styles from './Hero.module.css'
import Image from 'next/image'


export default function Hero() {
  return <>
    <div className={`${styles.heroWrapper}`}>
      <Image src='/hero/hero-main.jpg' layout='fill' />
      <div className={`${styles.hero}`}>
        <div className={styles.heroMain}>
          <h1>Summer of Innovation 2023</h1>
          <div className={styles.heroQuoteWrapper}>
            <div className={styles.styleBar}></div>
            <div className={styles.Quote}>Write your quote here</div>
          </div>
        </div>
      </div>
    </div>

  </>
}
