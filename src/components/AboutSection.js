// import "../css/AboutSection.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn";import GitHubIcon from "@mui/icons-material/GitHub";
import "../App.css"

const AboutSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="bio">
          <h3>Hello, my name is</h3>
          <h1>Alexis Winters,</h1>
          <h3>
            and I'm a <span id="typed-strings">Full Stack Developer.</span>
          </h3>
          <p>
            ...and I like to build things on the web. I'm a full-stack software developer with a passion for front-end development. I enjoy crafting
            interactive and responsive websites that leave a lasting impression. Take a look at my portfolio and let's bring your ideas to life
            together!
          </p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/alexis-winters/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            {/* <a href="https://www.instagram.com/alexisnicole.dev/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a> */}
            <a href="https://github.com/alexiscodes21/" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </div>
          <a href="../pdf/Resume_AlexisWinters.pdf" target="_blank" rel="noreferrer" className="btn">
            Resume
          </a>
        </div>
        {/* <div className="home-img">
          <img className="alexis" src="img/photo4.jpeg" alt="Photo of Alexis" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
