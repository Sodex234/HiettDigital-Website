import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./TopBar.css";

export default class TopBar extends Component {

  state = {
    displayMobileMenu: false,
    items: [
      {name: "Home", link: "/"},
      {name: "About", link: "/about"},
      {name: "Contact", link: "/contact"}
    ]
  };

  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      ...this.state,
      displayMobileMenu: !this.state.displayMobileMenu
    });
  }

  buildItems(standardItemClassName) {
    const items = [];

    this.state.items.forEach(item => {
      items.push((
        <Link to={item.link}>
          <div className={standardItemClassName}>
            <p>{item.name}</p>
          </div>
        </Link>
      ));
    });

    return items;
  }

  render() {
    if (this.state.displayMobileMenu) {
      return (
        <div className={"MobileMenu"}>
          <div className={"container"}>
            <div className={"row"} style={{paddingTop: 25}}>
              <div className={"col-6"}>
                <h1>Scott Hiett</h1>
              </div>
              <div onClick={this.toggleMobileMenu} className={"col-6"} style={{textAlign: "right", cursor: "pointer"}}>
                <h1><i className={"fas fa-times fa-fw"}/></h1>
              </div>
            </div>
            <div className={"MobileTopBarContainer"}>
              {this.buildItems("MobileTopBarItem")}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={"col-12 TopBar " + (this.props.light ? "LightTopBar" : "DarkTopBar")}>
        <div className={"container TopBarButtonContainer"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <h4>Scott Hiett</h4>
            </div>
            <div className={"col-6"}>
              <div className={"TopBarItemContainer"}>
                <div className={"TopBarItem TopBarMenuItem"} onClick={this.toggleMobileMenu}>
                  <p><i className={"fas fa-bars fa-fw"}/></p>
                </div>

                {this.buildItems("TopBarItem")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}