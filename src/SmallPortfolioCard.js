import React, { Component } from "react";

export default class SmallPortfolioCard extends Component {

    constructor(props) {
        super(props);

        this.forwardToPage = this.forwardToPage.bind(this);
    }

    forwardToPage() {
        const win = window.open(this.props.targetUrl, '_blank');
        win.focus();
    }

    render() {
        return (
            <div className={"col-md-12 ProjectItemCard"} style={{borderTopColor: this.props.color}}>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
                {this.props.targetUrl ? (<div><br /><button className={"Btn"} onClick={this.forwardToPage}
                                                            style={{color: this.props.color,
                    borderColor: this.props.color, width: "100%"}}>{this.props.buttonName}</button></div>)
                    : (<div style={{display: "none"}} />)}
            </div>
        );
    }
}