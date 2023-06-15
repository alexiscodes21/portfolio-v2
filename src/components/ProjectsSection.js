import bookkeeperguruSite from "../img/bookkeeperguru.jpeg";
import socialdashboardSite from "../img/socialdashboard.jpg";
import googlecloneSite from "../img/googleclone.jpg";
import restaurantreviewsSite from "../img/plantopia.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectsSection = () => {
  return (
    <section className="projectsSection" id="projectsSection">
      <h2 className="sectionHeading">
        My <span>Projects</span>
      </h2>
      <div className="projects-container">
        <div className="card">
          <img className="projects" src={bookkeeperguruSite} alt={"Fictional Bookkeeper Website"} />
          <div className="card-body">
            <h3>Bookkeeper Business Landing Page</h3>
            <p>HTML, CSS, Bootstrap, Font Awesome</p>
            <div>
              <div className="project-links">
                <a href="https://bookkeeper-website.web.app" target="_blank" rel="noreferrer">
                  <h3>
                    Live Link <LaunchIcon />
                  </h3>
                </a>
              </div>
              <div className="project-links">
                <a href="https://github.com/alexiscodes21/bookkeeper-website" target="_blank" rel="noreferrer">
                  <h3>
                    View Code <GitHubIcon />
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="projects" src={socialdashboardSite} alt={"Social Media Dashboard"} />
          <div className="card-body">
            <h3>Social Media Dashboard w/ theme switcher</h3>
            <p>HTML, CSS, Javascript</p>
            <div>
              <div className="project-links">
                <a href="https://social-media-dashboard-304fc.web.app/" target="_blank" rel="noreferrer">
                  <h3>
                    Live Link <LaunchIcon />
                  </h3>
                </a>
              </div>
              <div className="project-links">
                <a href="https://github.com/alexiscodes21/social-media-dashboard" target="_blank" rel="noreferrer">
                  <h3>
                    View Code <GitHubIcon />
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="projects" src={googlecloneSite} alt={"Google Clone"} />
          <div className="card-body">
            <h3>Google Clone</h3>
            <p>React, Material UI</p>
            <div>
              <div className="project-links">
                <a href="https://clone-f757f.web.app/" target="_blank" rel="noreferrer">
                  <h3>
                    Live Link <LaunchIcon />
                  </h3>
                </a>
              </div>
              <div className="project-links">
                <a href="https://github.com/alexiscodes21/Google-clone" target="_blank" rel="noreferrer">
                  <h3>
                    View Code <GitHubIcon />
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="projects" src={restaurantreviewsSite} alt={"Plantopia Site"} />
          <div className="card-body">
            <h3>Restaurant Reviews Site</h3>
            <p>React, Reactstrap, Font Awesome</p>
            <div>
              <div className="project-links">
                <a href="https://restaurant-reviews-site.web.app/" target="_blank" rel="noreferrer">
                  <h3>
                    Live Link <LaunchIcon />
                  </h3>
                </a>
              </div>
              <div className="project-links">
                <a href="https://github.com/alexiscodes21/restaurant-reviews-site" target="_blank" rel="noreferrer">
                  <h3>
                    View Code <GitHubIcon />
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
