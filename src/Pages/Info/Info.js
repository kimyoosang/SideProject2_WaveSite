import React, { useState } from "react";
import member1 from "../../images/team-member-1.jpg";
import member2 from "../../images/team-member-2.jpg";
import member3 from "../../images/team-member-3.jpg";

import "./Info.css";

function Info() {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const btn1Handelr = () => {
    setBtn1(!btn1);
  };
  const btn2Handelr = () => {
    setBtn2(!btn2);
  };
  const btn3Handelr = () => {
    setBtn3(!btn3);
  };

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
          <div
            className={btn1 ? "story-btn change" : "story-btn"}
            title="My Story"
            onClick={btn1Handelr}
          >
            <div className="story-btn-line"></div>
          </div>
          <div className={btn1 ? "story change" : "story"}>
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
          <div
            className={btn2 ? "story-btn change" : "story-btn"}
            title="My Story"
            onClick={btn2Handelr}
          >
            <div className="story-btn-line"></div>
          </div>
          <div className={btn2 ? "story change" : "story"}>
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
          <div
            className={btn3 ? "story-btn change" : "story-btn"}
            title="My Story"
            onClick={btn3Handelr}
          >
            <div className="story-btn-line"></div>
          </div>
          <div className={btn3 ? "story change" : "story"}>
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

export default Info;
