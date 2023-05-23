import React from "react"
import Image from "next/image"
import classes from "./Footer.module.css"
import Link from "next/link"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

const Footer = () => {
  const handleOnClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const date = new Date()
  const year = date.getFullYear()

  return (
    <div id="footer123">
      <div className={classes.footer}>
        <div className={classes.footerDiv}>
          <div className={classes.footerImageWrapper}>
            <a href="#">
              <Image src={`${prefix + "/Footer/oss_logo.png"}`} fill priority />
            </a>
          </div>
          <div className={classes.footerLinksWrapper}>
            <div
              onClick={() => handleOnClick("hero69")}
              aria-current="page"
              className={`${classes.footerlink} ${classes.navLink}`}
            >
              Home
            </div>
            <div
              onClick={() => handleOnClick("eventsId#123")}
              className={`${classes.footerlink} ${classes.navLink}`}
            >
              Events
            </div>
          </div>

          <div className={classes.footerContactWrapper}>
            <div>
              <a
                href="mailto:gstech@iitdh.ac.in@"
                className={classes.footerlink}
              >
                gstech@iitdh.ac.in
              </a>
            </div>
            <div>
              <a
                href="mailto:oss@iitdh.ac.in@"
                className={classes.footerlink}
              >
                oss@iitdh.ac.in
              </a>
            </div>
          </div>
          <div className={classes.rightFooterWrapper}>
            <div className={classes.footerIconsWrapper}>
              <a
                href="https://www.instagram.com/technical.council_iitdh/"
                target="_blank"
                className={classes.footerlink}
              >
                <img
                  src="https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8eaaf7b5b57d23c61a3_Instagram%20White.svg"
                  loading="lazy"
                  alt="White Instagram Icon"
                  className="socialmediaicon"
                />
              </a>
            </div>
            <div>© Copyright - {year} SOI all right reserved</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
