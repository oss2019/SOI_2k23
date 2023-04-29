import styles from './Events.module.css'
import EventCard from './EventCard/EventCard'
import EventsData from './data'

export default function Events(){
  console.log(EventsData)
  return <>
    <div className={styles.eventsWrapper}>
      <div className={`${styles.eventsMain} page-wrapper`}>
        <div className={styles.eventsHeading}>
          <h1>Events</h1>
        </div>
        <div className={styles.eventsCardWrapper}>
          {
            EventsData.map((data, index) => {
              return <EventCard data={data} key={index} number={index+1} leftSideImage={index%2 ? false : true} />
            })
          }
        </div>
      </div>
    </div>
  </>
}