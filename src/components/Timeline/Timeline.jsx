import styles from "./Timeline.module.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import timeLineData from "./timeline_data"
import "react-vertical-timeline-component/style.min.css"


export default function Timeline() {
  return <>
    <div className={styles.timelineWrapper} id="timeline420">
      <div className={`${styles.timelineMain} page-wrapper`}>
        <div className={styles.timelineHeading}>
          <div className={styles.text_block}>
            <h2>Timeline</h2>
          </div>
        </div>
        <div className={styles.verticalTimelineMain}>
          <VerticalTimeline>
            {
              timeLineData.map((data) => {
                return (
                  <VerticalTimelineElement
                    key={data.key}
                    date={data.date}
                    dateClassName="date"
                    className={`${data.key / 2 ? "timeline-right" : "timeline-left"}`}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {data.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      {data.location}
                    </h5>
                    <p id="description">{data.description}</p>
                  </VerticalTimelineElement>
                )
              })
            }

          </VerticalTimeline>
        </div>

      </div>
    </div>
  </>
}
