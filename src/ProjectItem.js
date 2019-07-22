import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ProjectItem extends Component {

    render() {
        return (
            <div className={"col-12 PortfolioItemContainer HoverableExpand"} style={{ backgroundColor: this.props.light ? "white" : "#ecf0f1", backgroundImage: "url(" + this.props.image + ")" }}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-6 PortfolioItem"} style={{ backgroundColor: this.props.light ? "#ecf0f1" : "white", borderTopColor: this.props.topColor }}>
                            <p className={"PortfolioSubLine"}>{this.props.projectType}</p>
                            <h1>{this.props.name}</h1>
                            <p>{this.props.description}</p>

                            <a target="_blank" href={this.props.targetUrl}>
                                <button style={{marginTop: 15, borderColor: this.props.topColor, color: this.props.topColor}} className={"Btn"}>Learn More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}