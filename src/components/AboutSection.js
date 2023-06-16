import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import resume from "../pdf/Resume_AlexisWinters.pdf";
import React from "react";
import Typed from "typed.js";
// import memoji from '../img/memoji.png'

const AboutSection = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Front End Developer", "Software Engineer", "Web Designer"],
      typeSpeed: 75,
      backSpeed: 75,
      backDelay: 750,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="bio">
          <h3>Hello, my name is</h3>
          <h1>Alexis Winters.</h1>
          <h3>
            <span ref={el} />
          </h3>
          <p>
            I like to build things on the web. I'm a full-stack software developer with a passion for front-end development. I enjoy crafting
            interactive and responsive websites that leave a lasting impression. Take a look at my portfolio and let's bring your ideas to life
            together!
          </p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/alexis-winters/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/alexisnicole.dev/" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://github.com/alexiscodes21/" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </div>
          <a href={resume} target="_blank" rel="noreferrer" className="btn">
            Resume
          </a>
        </div>
        {/* <div className="home-img">
          <img className="alexis" src={memoji} alt={"Alexis's memoji"} />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
