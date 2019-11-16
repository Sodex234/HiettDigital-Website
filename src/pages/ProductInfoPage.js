import React, {Component} from "react";
import TopBar from "../components/TopBar";
import Void from "../Void";

import "./ProductInfoPage.css";
import {Link} from "react-router-dom";

export default class ProductInfoPage extends Component {

  mainColor = "#1abc9c";

  render() {
    return (
      <Void>
        <div className={"col-12 ProductGradientTop"}>
          <TopBar light={true}/>

          <div className={"container"}>
            <h1 className={"ProductTitle"}>HYBER</h1>
            <p className={"ProductSlogan"}>Revolutionise your travel money</p>

            <div className="row">
              <div className={"col-md-6 PortfolioItem"}
                   style={{color: "black", backgroundColor: "white", borderTopColor: this.mainColor}}>
                <p className={"PortfolioSubLine"}>GET READY TO</p>
                <h1>REINVENT HOLIDAY FINANCE</h1>
                <p>Description</p>

                <Link to={this.props.targetUrl}>
                  <button style={{marginTop: 15, borderColor: this.mainColor, color: this.mainColor}}
                          className={"Btn"}>Watch the Video
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={"col-12 DropShadowItem"}>
          <div className={"container"}>
            <div className={"row"}>

              <div className={"col-md-4"}>
                <div className={"ProductStageNumberContainer FloatLeft"} style={{backgroundColor: "#e74c3c"}}>
                  <h1>1</h1>
                </div>
              </div>

              <div className={"col-md-8 StageAreaContent RightStageAreaContent"}>
                <h1>Understanding the User Needs</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, sem in hendrerit posuere, diam
                  lectus placerat urna, at venenatis purus dui eu sem. Curabitur porttitor diam quis finibus molestie.
                  Fusce at urna tortor. Nunc ullamcorper pellentesque nibh sed lacinia. In vel massa facilisis,
                  pellentesque nibh at, tempor ligula. Phasellus ac velit nulla. Nulla sapien enim, condimentum a cursus
                  ut, blandit a purus. In tristique eros ex, ut tempus urna tristique ut. Proin porttitor velit nisi,
                  sit amet efficitur justo porttitor non. Curabitur massa lacus, auctor quis magna sit amet, tincidunt
                  placerat nulla. Aliquam at vestibulum neque, id faucibus arcu.</p>
              </div>

            </div>
          </div>
        </div>


        <div className={"col-12"}>
          <div className={"container"}>
            <div className={"row"}>

              <div className={"col-md-8 StageAreaContent LeftStageAreaContent"}>
                <h1>Designing our Workflow</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, sem in hendrerit posuere, diam
                  lectus placerat urna, at venenatis purus dui eu sem. Curabitur porttitor diam quis finibus molestie.
                  Fusce at urna tortor. Nunc ullamcorper pellentesque nibh sed lacinia. In vel massa facilisis,
                  pellentesque nibh at, tempor ligula. Phasellus ac velit nulla. Nulla sapien enim, condimentum a cursus
                  ut, blandit a purus. In tristique eros ex, ut tempus urna tristique ut. Proin porttitor velit nisi,
                  sit amet efficitur justo porttitor non. Curabitur massa lacus, auctor quis magna sit amet, tincidunt
                  placerat nulla. Aliquam at vestibulum neque, id faucibus arcu.</p>
              </div>

              <div className={"col-md-4"}>
                <div className={"ProductStageNumberContainer FloatRight"} style={{backgroundColor: "#e67e22"}}>
                  <h1>2</h1>
                </div>
              </div>

            </div>
          </div>
        </div>

        <ProductStageInfo
          backgroundColor={"#e74c3c"}
          stageNumber={1}
          title={"Some Title"}
          text={"This is some text about this stage."}
          useDropShadow
        />


      </Void>
    );
  }
}

class ProductStageInfo extends Component {

  render() {
    const itemArray = [];

    itemArray.push((
      <div className={"col-md-4"}>
        <div className={"ProductStageNumberContainer FloatLeft"} style={{backgroundColor: this.props.backgroundColor}}>
          <h1>{this.props.stageNumber}</h1>
        </div>
      </div>
    ));

    itemArray.push((
      <div className={"col-md-8 StageAreaContent RightStageAreaContent"}>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    ));

    return (
      <div className={"col-12 " + (this.props.useDropShadow ? "DropShadowItem" : "")}>
        <div className={"container"}>
          <div className={"row"}>

            {this.props.leftSide ? itemArray[0] : itemArray[1]}
            {this.props.leftSide ? itemArray[1] : itemArray[0]}

          </div>
        </div>
      </div>
    );
  }
}

export {ProductStageInfo};