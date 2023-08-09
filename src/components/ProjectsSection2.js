import bookkeeperGuruSite from "../img/bookkeeperguru.jpeg";
import socialDashboardSite from "../img/socialdashboard.jpg";
import googleCloneSite from "../img/googleclone.jpg";
import restaurantReviewsSite from "../img/plantopia.png";

import React from "react";

const ProjectsSection2 = () => {
  return (
    <section className="projectsSection" id="projectsSection">
      <h2 className="sectionHeading">
        My <span>Projects</span>
      </h2>
      <div className="projects-container2">
        {/* project 1 */}
        <div className="card2">
          <img className="card-image" src={bookkeeperGuruSite} alt={"Fictional Bookkeeper Website"} />
          <div className="card-content">
            <h3 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium
            </p>
            <div className="card-buttons">
              <a className="action" href="https://bookkeeper-website.web.app" target="_blank" rel="noreferrer">
                Live Link
                <span aria-hidden="true">→</span>
              </a>
              <a className="action" href="https://github.com/alexiscodes21/bookkeeper-website" target="_blank" rel="noreferrer">
                View Code
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="card2">
          <img className="projects" src={socialDashboardSite} alt={"Social Media Dashboard"} />
          <div className="card-content">
            <h3 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium
            </p>
            <div className="card-buttons">
              <a className="action" href="https://social-media-dashboard-304fc.web.app/" target="_blank" rel="noreferrer">
                Live Link
                <span aria-hidden="true">→</span>
              </a>
              <a className="action" href="https://github.com/alexiscodes21/social-media-dashboard" target="_blank" rel="noreferrer">
                View Code
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="card2">
          <img className="projects" src={googleCloneSite} alt={"Google Clone"} />
          <div className="card-content">
            <h3 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium
            </p>
            <div className="card-buttons">
              <a className="action" href="https://clone-f757f.web.app/" target="_blank" rel="noreferrer">
                Live Link
                <span aria-hidden="true">→</span>
              </a>
              <a className="action" href="https://github.com/alexiscodes21/Google-clone" target="_blank" rel="noreferrer">
                View Code
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* project 4 */}
        <div className="card2">
          <img className="projects" src={restaurantReviewsSite} alt={"Plantopia Site"} />
          <div className="card-content">
            <h3 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium
            </p>
            <div className="card-buttons">
              <a className="action" href="https://restaurant-reviews-site.web.app/" target="_blank" rel="noreferrer">
                Live Link
                <span aria-hidden="true">→</span>
              </a>
              <a className="action" href="https://github.com/alexiscodes21/restaurant-reviews-site" target="_blank" rel="noreferrer">
                View Code
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* end of projects */}
      </div>
    </section>
  );
};

export default ProjectsSection2;
