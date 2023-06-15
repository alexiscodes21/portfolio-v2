import htmlLogo from '../img/html.svg';
import cssLogo from "../img/css.svg";
import javascriptLogo from '../img/javascript.svg'
import sassLogo from "../img/sass.svg";
import bootstrapLogo from '../img/bootstrap.svg'
import gitLogo from '../img/git.svg'
import githubLogo from "../img/github.svg";
import reactLogo from "../img/react.svg";
import reactnativeLogo from "../img/react-native.svg";
import reduxLogo from "../img/redux.svg";
import googlecloudLogo from "../img/google-cloud.svg";
import firebaseLogo from "../img/firebase.svg";
import mongodbLogo from "../img/mongodb.svg";
import expressjsLogo from "../img/expressjs.svg";
import nodejsLogo from "../img/nodejs.svg";
import postmanLogo from "../img/postman.svg";
import vscodeLogo from "../img/vscode.svg";
import materialuiLogo from "../img/material-ui.svg";
import fontawesomeLogo from "../img/fontawesome.svg";

const SkillsSection = () => {
  return (
    <section className="skills" id="skillsSection">
      <h2 className="sectionHeading">
        My <span>Skills</span>
      </h2>
      <div className="skills-container">
        <div className="skill">
          <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer">
            <img className="logos" src={htmlLogo} alt={"HTML logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer">
            <img className="logos" src={cssLogo} alt={"CSS logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noreferrer">
            <img className="logos" src={javascriptLogo} alt={"Javascript logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
            <img className="logos" src={sassLogo} alt={"SASS logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img className="logos" src={bootstrapLogo} alt={"Bootstrap logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://git-scm.com" target="_blank" rel="noreferrer">
            <img className="logos" src={gitLogo} alt={"Git logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img className="logos github" src={githubLogo} alt={"Github logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <img className="logos" src={reactLogo} alt={"React.js logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
            <img className="logos" src={reactnativeLogo} alt={"React Native logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
            <img className="logos" src={reduxLogo} alt={"Redux logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
            <img className="logos" src={googlecloudLogo} alt={"Google Cloud logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
            <img className="logos" src={firebaseLogo} alt={"Firebase logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img className="logos" src={mongodbLogo} alt={"MongoDB logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img className="logos express" src={expressjsLogo} alt={"ExpressJS logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
            <img className="logos" src={nodejsLogo} alt={"NodeJS logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
            <img className="logos" src={postmanLogo} alt={"Postman logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <img className="logos" src={vscodeLogo} alt={"VS Code logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://mui.com/core/" target="_blank" rel="noreferrer">
            <img className="logos" src={materialuiLogo} alt={"Material UI logo"} />
          </a>
        </div>
        <div className="skill">
          <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
            <img className="logos" src={fontawesomeLogo} alt={"Font Awesome logo"} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection