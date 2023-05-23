import styles from "./Hero.module.css"
import Image from "next/image"
import { useRef, useEffect } from "react"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Hero() {
  const wheelRef = useRef()

  GSAP.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const wheel = wheelRef.current
    const timeLine = GSAP.timeline({
      scrollTrigger: {
        trigger: wheel,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    timeLine.to(wheel, {
      rotation: -30,
    })
  }, [])

  return (
    <>
      <div className={`${styles.heroWrapper}`} id="hero69">
        <div className={styles.heroBgContainer}>
          <Image
            src={`${prefix + "/Hero/hero-bg.svg"}`}
            priority
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={`${styles.hero}`}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroMain}>
              <h1>Summer of Innovation 2023</h1>
              <div className={styles.heroQuoteWrapper}>
                <div className={styles.styleBar}></div>
                <div className={styles.Quote}>This Summer Conquer your<br>fallacies and carve your finesse.</div>
              </div>
            </div>
            <div className={styles.heroArtWrapper}>
              <Image src={`${prefix + "/Hero/hero-art.svg"}`} fill priority />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutWheelWrapper} ref={wheelRef}>
          <Image
            src={`${prefix + "/Events/Blue_Wheel_Spcok.svg"}`}
            fill
            priority
          />
        </div>
        <div className={`page-wrapper`}>
          <div className={styles.aboutMain}>
            <div className={styles.aboutStyleStar}>
              <Image src={`${prefix + "/Hero/style-star.svg"}`} fill priority />
            </div>
            <div className={styles.aboutTitle}>
              <h1>Overview</h1>
            </div>
            <div className={styles.aboutContent}>
              The third edition of Summer of Innovation is a platform for honing
              one&rsquo;s technical skills and promoting tech culture in our
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
        <div className={styles.aboutBgWrapper}>
          <Image
            src={`${prefix + "/Hero/hero-bg-2.svg"}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </>
  )
}
