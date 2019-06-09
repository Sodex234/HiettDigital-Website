import React, { Component } from "react";

export default class SmallPortfolioCard extends Component {

    render() {
        return (
            <div className={"col-md-12 ProjectItemCard"} style={{borderTopColor: this.props.color}}>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
                {this.props.targetUrl ? (<div><br /><button className={"Btn"} style={{color: this.props.color, borderColor: this.props.color, width: "100%"}}>Learn More</button></div>) : (<div style={{display: "none"}} />)}
            </div>
        );
    }
}