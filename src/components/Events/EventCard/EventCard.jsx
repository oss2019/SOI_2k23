import styles from './EventCard.module.css'
import Image from 'next/image'

export default function EventCard({leftSideImage, data, number}){
  return <>
    <div className={styles.eventCardWrapper}>
      <div className={styles.eventCardMain}>
        <div className={`${styles.eventInfo} ${leftSideImage && styles.eventInfoLeft}`}>
          <div className={styles.eventNumber}>
            <h1>{number<10 ? `0${number}` : number}</h1>
            <div className={styles.styleDiv}></div>
          </div>
          <div className={styles.eventName}>
            <h1>{data.heading}</h1>
          </div>
          <div className={styles.eventInfo}>
            {data.content}
          </div>
          <div className={styles.knowMore}>
            <a href={data.knowMoreLink}>
              <div>Know More</div>
              <div className={styles.buttonImage}>
                <Image src='/Events/event-button.svg' fill />
              </div>
            </a>
          </div>
        </div>
        <div className={`${styles.eventImageWrapper} ${leftSideImage && styles.eventImageWrapperLeft}`}>
          <div className={styles.eventImageCard}>
            <Image src={data.image} fill />
          </div>
        </div>
      </div>
    </div>
  </>
}