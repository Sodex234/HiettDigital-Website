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
                                        I'm Scott, and I'm from England. I've been programming since the age of 7, and have never looked back.
                                        I enjoy writing in as many languages as I can, constantly learning and challenging myself. Through this,
                                        I have created (and worked non stop) on some awesome projects. I'm always looking to take the next
                                        steps into innovating the next leading product, in any field. Being a student, I have a large amount
                                        of free time, which allows me to experiment with a range of ideas.
                                        <br /><br />

                                        Have a project you need development help with? Need a new website?
                                    </p>

                                    <br />

                                    <a href={"http://hiett.digital/cv.pdf"} target={"_blank"}>
                                        <button className={"Btn BtnFilled"}>CV</button>
                                    </a>
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
                                            <h4>Other Hobbies</h4>
                                            <p>I'm also really into music & politics! In my spare time, I play the bass guitar.</p>
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