import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const handleOnClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className={classes.footer}>
        <div className={classes.footerDiv}>
          <div className={classes.footerwrapper}>
            <a href="/">
              <img
                className={classes.logoImg}
                src="https://oss2019.github.io/summer-of-innovation-2021/Images/oss_logo.png"
                alt="summer of innovation logo"
              />
            </a>
          </div>
          <div className={classes.footerwrapper}>
            <div
              onClick={() => handleOnClick("homeId#69")}
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

          <div className={classes.footerwrapper}>
            <a
              href="mailto:contact@cccreative.design"
              className={classes.footerlink}
            >
              contact@cccreative.design
            </a>
            <br />
            <br />

            <a href="tel:‪(970)627-7286‬" className={classes.footerlink}>
              <strong className="bold-text-3">‪(970) 627-7286‬</strong>
            </a>
          </div>
          <div className={classes.rightfooterwrapper}>
            <div className={classes.footerwrapper}>
              <a
                href="http://www.dribbble.com/cc-creative"
                target="_blank"
                className={classes.footerlink}
              >
                <img
                  src="https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8e918d02f0c74510a82_Dribbble%20White.svg"
                  loading="lazy"
                  alt="White Dribbble Icon"
                  className="socialmediaicon"
                />
              </a>
              <a
                className={classes.footerlink}
                href="https://www.instagram.com/cccreative.design/#"
                target="_blank"
              >
                <img
                  src="https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8eaaf7b5b57d23c61a3_Instagram%20White.svg"
                  loading="lazy"
                  alt="White Instagram Icon"
                  className="socialmediaicon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cccreativedesign/"
                target="_blank"
                className={classes.footerlink}
              >
                <img
                  src="https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8ea5d479b434e19336a_LinkedIn%20White.svg"
                  loading="lazy"
                  alt="White LinkedIn Icon"
                  className="socialmediaicon"
                />
              </a>
              <a
                href="https://twitter.com/cccreative_ui"
                className={classes.footerlink}
              >
                <img
                  src="https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8eb76402719551ab6dc_Twitter%20White.svg"
                  loading="lazy"
                  alt="White Twitter Icon"
                  className="socialmediaicon"
                />
              </a>
            </div>
            <div className={`${classes.footerwrapper} ${classes.footerlink}`}>
              <p> © Copyright - {year} SOI all right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
