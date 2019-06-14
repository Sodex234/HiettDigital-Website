import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { downloadData } from "./data/DataCache";

import "./App.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import ProductInfoPage from "./pages/ProductInfoPage";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        downloadData().then(() => {
            this.setState({ loaded: true });
        });
    }

    render() {
        if(!this.state.loaded) {
            return (
                <div className={"LoadingPage"}>
                    <div className={"LoadingPageContainer"}>
                        <i className={"fas fa-spinner fa-spin fa-3x"} />

                        <br />
                        <br />

                        <h1>HiettDigital</h1>
                        <p>Hold up! We're loading...</p>
                    </div>
                </div>
            );
        }

        return(
            <Router>
                <div className={"App row"}>
                    <Route path={"/"} exact component={PortfolioPage} />
                    <Route path={"/about"} component={AboutPage} />
                    <Route path={"/contact"} component={ContactPage} />
                    <Route path={"/project/hyber"} component={ProductInfoPage} />

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