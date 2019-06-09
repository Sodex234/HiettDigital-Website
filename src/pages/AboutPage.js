import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ScottImage from "../images/scott.jpg";

import "./AboutPage.css";
import TopBar from "../components/TopBar";

export default class AboutPage extends Component {

    render() {
        return (
            <div className={"col-12"} style={{backgroundPosition: "top", backgroundSize: "cover", backgroundImage: "url(" + ScottImage + ")"}}>
                <TopBar light={true} />

                <div className={"row"}>
                    <div className={"col-12"}>
                        <div style={{height: "500px"}} /> {/* Some Padding */}

                        <div className={"container"}>
                            <h1 className={"AboutMeText"}>About Me</h1>
                        </div>
                    </div>

                    <div className={"col-12 AboutPageContent DropShadowItem"}>
                        <div className={"row"}>
                            <div className={"col-12 HoverableExpand"}>
                                <div className={"container"}>
                                    <br />
                                    <h1>A <span className={"SloganColor"}>15 year-old</span> software engineer & shoutcaster who not only
                                        enjoys understanding "<span className={"SloganColor"}>how</span>", but also "<span className={"SloganColor"}>why</span>"</h1>

                                    <p>
                                        I'm Scott, and I'm from England. This is some text about me and it will span over a few lines
                                        and contain lots and lots of relevant information. For now, it's just dummy text. I have just
                                        typed all of this out and it will be super meaningful but I'm too lazy to figure out what I
                                        want to write yet, so you get this. See? Magic. You can read this. It's in a pretty font,
                                        on a pretty webpage. At this point I'm just making up words and stringing them together for
                                        no apparent reason, because why not? You're not going to stop me!

                                        <br /><br />

                                        Oooo, a break. Now we're talking about something serious.
                                    </p>

                                    <br />

                                    <button className={"Btn BtnFilled"}>CV</button>
                                    <Link to={"/contact"}>
                                        <button className={"Btn"} style={{marginLeft: 5}}>Contact Me</button>
                                    </Link>
                                    <br /><br /><br />
                                </div>
                            </div>
                            <div className={"col-12 DropShadowItem HoverableExpand"} style={{backgroundColor: "#ecf0f1"}}>
                                <br />

                                <div className={"container"}>
                                    <div className={"row"}>
                                        <div className={"col-md-4"}>
                                            <h4>Pizza?</h4>
                                            <p>Pizza.</p>
                                        </div>
                                        <div className={"col-md-4"}>
                                            <h4>Languages / Frameworks</h4>
                                            <p>Full stack web development with PHP / NodeJs, C++, Java (incl. Kotlin & Scala), C#, Swift, React / React Native & many more</p>
                                        </div>
                                        <div className={"col-md-4"}>
                                            <h4>Socials</h4>
                                            <p className={"SocialTextClear"}>
                                                <a href={"https://instagram.com/scott._h"} target={"_blank"}><i className="fab fa-fw fa-instagram" /> scott._h</a>
                                                <br />
                                                <a href={"https://twitter.com/sodex234"} target={"_blank"}><i className="fab fa-fw fa-twitter" /> sodex234</a>
                                                <br />
                                                <i className="fab fa-fw fa-discord" /> Scott H#1834
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <br />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}