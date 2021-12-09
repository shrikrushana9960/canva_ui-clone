import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import logo from '../icons/svgexport-3.svg'
import "./TopBar.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import {  Grid } from "antd";
import Button from "./Button/Button"
import TopBarItem from "./TopBarItem";
const { useBreakpoint } = Grid;
const Topbar = () => {
    const { Header, Content, Footer } = Layout;

const { md } = useBreakpoint();
    const [visible, setVisible] = React.useState(false);
    const showDrawer = () => {
        setVisible(true);
    }
    const onClose = () => {
        setVisible(false);
    }
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex:"444",
          background: "white",
          boxShadow: "1px 1px 1px grey",
        }}
      >
        <div style={{ margin: "10px", marginLeft: "3%", display: "flex" }}>
          <div
            class="navbar"
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-around",
            }}
          >
            <img src={logo} />
            <a href="#home">Home</a>

            <div class="dropdown">
              <button class="dropbtn">
                Design
                <i class="fa fa-caret-down"></i>
              </button>
              <div
                class="dropdown-content"
                style={{ width: "60%", borderRadius: "10px" }}
              >
                <div
                  class="header"
                  style={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                </div>
              </div>
            </div>
            <a href="#home">Templates</a>
            <div class="dropdown">
              <button class="dropbtn">
                Features
                <i class="fa fa-caret-down"></i>
              </button>
              <div
                class="dropdown-content"
                style={{
                  width: "30%",
                  borderRadius: "10px",
                  marginLeft: "10%",
                }}
              >
                <div
                  class="header"
                  style={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                </div>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                Learn
                <i class="fa fa-caret-down"></i>
              </button>
              <div
                class="dropdown-content"
                style={{
                  width: "30%",
                  borderRadius: "20px",
                  marginLeft: "30%",
                }}
              >
                <div
                  class="header"
                  style={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                </div>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                Plans
                <i class="fa fa-caret-down"></i>
              </button>
              <div
                class="dropdown-content"
                style={{
                  width: "30%",
                  borderRadius: "10px",
                  marginLeft: "30%",
                }}
              >
                <div
                  class="header"
                  style={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                  <TopBarItem
                    heading={"Social Network"}
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    data={["Instagram", "Facebook", "Twitter", "Linkedin"]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",

              marginRight: "2%",
              alignItems: "center",
            }}
          >
            <i class="fa fa-question-circle fa-2x" aria-hidden="true"></i>
            <div style={{ marginLeft: "10px" }}></div>
            <Button text={"Log in"} white />
            <div style={{ marginLeft: "10px" }}></div>
            <Button text={"Sign up"} />
          </div>
        </div>
      </div>
    );
}

export default Topbar
