import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export default class App extends Component {

    render() {
        return(
            <Router>
                <div className={"App row"}>
                    <Route path={"/"} exact component={PortfolioPage} />
                    <Route path={"/about"} component={AboutPage} />
                    <Route path={"/contact"} component={ContactPage} />

                    <div className={"col-12 DropShadowItem"} style={{backgroundColor: "#2c3e50"}}>
                        <div className={"container"}>
                            <br />
                            <div className={"row"} style={{color: "white"}}>
                                <div className={"col-md-6"}>
                                    <p>Email me! <a style={{color: "white"}} href={"mailto:scott@hiett.digital"}>scott@hiett.digital</a></p>
                                </div>
                                <div className={"col-md-6"}>
                                    <p style={{textAlign: "right"}}>&copy; Scott Hiett 2019. All rights reserved.</p>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}