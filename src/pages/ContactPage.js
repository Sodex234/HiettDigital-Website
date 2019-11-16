import React, {Component} from "react";

import TopBar from "../components/TopBar";

import ShoutcastingImage from "../images/shoutcasting.jpg";

import "./ContactPage.css";

export default class ContactPage extends Component {

  render() {
    return (
      <div className={"col-12"} style={{
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundImage: "url(" + ShoutcastingImage + ")"
      }}>
        <TopBar light={true}/>

        <div className={"row"}>
          <div className={"col-12"}>
            <div style={{height: "500px"}}/>
            {/* Some Padding */}

            <div className={"container"}>
              <h1 className={"ContactMeText"}>Contact Me</h1>
            </div>
          </div>

          <div className={"col-12 DropShadowItem"} style={{backgroundColor: "white"}}>
            <div className={"row"}>
              <div className={"col-12 HoverableExpand"}>
                <div className={"container"}>
                  <br/>
                  <h1>Want to talk? <span className={"SloganColor"}>Let's make it happen!</span></h1>

                  <p>
                    The best way to get in contact with me is via email.

                    <br/><br/>

                    <a href={"mailto:scott@hiett.digital"}>
                      <button className={"Btn BtnFilled"}>scott@hiett.digital</button>
                    </a>
                  </p>

                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}