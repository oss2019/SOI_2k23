import styles from "./Timeline.module.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import timeLineData from "./timeline_data"
import "react-vertical-timeline-component/style.min.css"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Timeline() {
  return (
    <>
      <div
        className={styles.timelineWrapper}
        id="timeline"
        style={{
          backgroundImage: `url(${prefix}/Timeline/inspiration-geometry.png)`,
        }}
      >
        <div className={`${styles.timelineMain} page-wrapper`}>
          <div className={styles.timelineHeading}>
            <div className={styles.text_block}>
              <h2>Timeline</h2>
            </div>
          </div>
          <div className={styles.verticalTimelineMain}>
            <VerticalTimeline>
              {timeLineData.map((data) => {
                return (
                  <VerticalTimelineElement
                    key={data.id}
                    date={data.date}
                    dateClassName="date"
                    className={`${
                      data.key / 2 ? "timeline-right" : "timeline-left"
                    }`}
                  >
                    <h2 className="vertical-timeline-element-title">
                      {data.title}
                    </h2>
                    <p id="description">{data.description}</p>
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  )
}
