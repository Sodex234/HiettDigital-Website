import React, {Component} from "react";
import {Link} from "react-router-dom";

import ProjectItem from "../ProjectItem";

import HyberImage from "../images/hyber.png";
import DelaneImage from "../images/delanesimsync.png";
import MatadorImage from "../images/matadorgaming.png";

import "./PortfolioPage.css";
import TopBar from "../components/TopBar";
import SmallPortfolioCard from "../SmallPortfolioCard";
import DataStore from "../data/DataCache";

export default class PortfolioPage extends Component {

  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    let i = 0;
    const pItemArray = DataStore.projects.map(projectItem => ({
      type: projectItem.type,
      element: <SmallPortfolioCard
        name={projectItem.title}
        description={projectItem.description}
        targetUrl={projectItem.targeturl}
        buttonName={projectItem.buttonname}
        color={"#27ae60"}
        key={`project-item-${i++}`}
      />
    }));

    return (
      <div className={"col-12"}>
        <TopBar/>

        <div className={"BackToTopButton"} onClick={this.scrollToTop}>
          <i className="fas fa-chevron-up fa-2x"/>
        </div>

        <div className={"TopBarSloganContainer col-12"}>
          <div className={"container"}>
            <h1>I code stuff. <span className={"SloganColor"}>And I'm passionate about it.</span></h1>
            <p>Here you will see my main projects - to view all of them scroll down or <a href={"#Projects"}>click
              here</a>!</p>
            <br/>

            <Link to={"/contact"}>
              <button style={{marginTop: 40}} className={"Btn BtnFilled"}>Contact Me</button>
            </Link>
          </div>
        </div>

        <ProjectItem
          name={"Hyber"}
          projectType={"Hackathon Winner"}
          description={"HYBER is a digital currency exchange service. Using AI and sentiment analysis we can intelligently maximise your trip spending money, exchanging between currencies at the best times."}
          targetUrl={"https://devpost.com/software/hyber-kg03ap"}
          topColor={"#3498db"}
          light={true}
          image={HyberImage}
        />

        <ProjectItem
          name={"SimSync"}
          projectType={"Sims 4 Multiplayer"}
          description={"I am a lead developer and co-owner of Delane Studios and SimSync, the popular Sims 4 Multiplayer mod. We currently have over 28,000 people in our Discord server."}
          targetUrl={"http://www.delane-studios.com"}
          topColor={"#27ae60"}
          light={false}
          image={DelaneImage}
        />

        <ProjectItem
          name={"Matador Gaming"}
          projectType={"Website & Overlay System"}
          description={"eSports website for my school team. Built on Wordpress. I also created custom overlays using SASS and jQuery."}
          targetUrl={"http://www.mtd-gaming.uk"}
          topColor={"#c0392b"}
          light={true}
          image={MatadorImage}
        />

        <div className={"col-12 HoverableExpand DropShadowItem"} id={"Projects"}>
          <br/>

          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-md-4"}>
                <h3 style={{textAlign: "center", paddingBottom: 10}}>Projects</h3>

                {pItemArray.filter(item => item.type === "PROJECT").map(item => item.element)}
              </div>
              <div className={"col-md-4"}>
                <h3 style={{textAlign: "center", paddingBottom: 10}}>Media</h3>

                {pItemArray.filter(item => item.type === "MEDIA").map(item => item.element)}
              </div>
              <div className={"col-md-4"}>
                <h3 style={{textAlign: "center", paddingBottom: 10}}>Quotes</h3>

                {pItemArray.filter(item => item.type === "QUOTE").map(item => item.element)}
              </div>
            </div>
          </div>

          <br/>
        </div>
      </div>
    );
  }
}