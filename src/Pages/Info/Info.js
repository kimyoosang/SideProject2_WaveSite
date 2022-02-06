import React from "react";
import member1 from "../../images/team-member-1.jpg";
import member2 from "../../images/team-member-2.jpg";
import member3 from "../../images/team-member-3.jpg";

import "./Info.css";

function info() {
  return (
    <section className="section-3">
      <h1 className="section-heading">Team</h1>
      <div className="team-wrapper">
        <div className="team-member">
          <img src={member1} className="team-member-img" />
          <h2 className="team-member-name">
            Nick Smith <span>(Designer)</span>
          </h2>
          <ul className="team-member-skills">
            <li>Rs</li>
            <li>Figma</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Ai</li>
          </ul>
          <a href="" className="projects-btn">
            Projects
          </a>
          <div className="story-btn" title="My Story">
            <div className="story-ben-line"></div>
          </div>
          <div className="story">
            <h4 className="story-heading">About Me</h4>
            <p className="story-paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              totam cumque deleniti adipisci culpa ea assumenda odit officiis,
              deserunt sit maiores eos sunt. Aspernatur sunt quas pariatur,
              harum praesentium inventore?
            </p>
          </div>
        </div>
        <div className="team-member">
          <img src={member2} className="team-member-img" />
          <h2 className="team-member-name">
            Bob Brown <span>(Designer)</span>
          </h2>
          <ul className="team-member-skills">
            <li>Ae</li>
            <li>Pr</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Inkscape</li>
          </ul>
          <a href="" className="projects-btn">
            Projects
          </a>
          <div className="story-btn" title="My Story">
            <div className="story-ben-line"></div>
          </div>
          <div className="story">
            <h4 className="story-heading">About Me</h4>
            <p className="story-paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              totam cumque deleniti adipisci culpa ea assumenda odit officiis,
              deserunt sit maiores eos sunt. Aspernatur sunt quas pariatur,
              harum praesentium inventore?
            </p>
          </div>
        </div>
        <div className="team-member">
          <img src={member3} className="team-member-img" />
          <h2 className="team-member-name">
            John Doe <span>(Developer)</span>
          </h2>
          <ul className="team-member-skills">
            <li>Javascript</li>
            <li>React</li>
            <li>Node Js</li>
            <li>CSS3</li>
            <li>Ai</li>
          </ul>
          <a href="" className="projects-btn">
            Projects
          </a>
          <div className="story-btn" title="My Story">
            <div className="story-ben-line"></div>
          </div>
          <div className="story">
            <h4 className="story-heading">About Me</h4>
            <p className="story-paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              totam cumque deleniti adipisci culpa ea assumenda odit officiis,
              deserunt sit maiores eos sunt. Aspernatur sunt quas pariatur,
              harum praesentium inventore?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default info;
