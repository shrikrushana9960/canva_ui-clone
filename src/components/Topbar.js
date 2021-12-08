import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import "./TopBar.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import {  Grid } from "antd";

import { Drawer, Button } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
      <div>
        <div class="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style={{ width: "60%",borderRadius:"10px" }}>
              <div class="header" style={{ margin: "10px",display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
                <div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "160px",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="https://www.w3schools.com/howto/img_snow.jpg"
                      width="100%"
                      height="96px"
                    />
                  </div>
                  <div style={{ marginTop: "10px", lineHeight: "1" }}>
                    <h3 style={{ fontWeight: "bold" }}>Social Media &</h3>
                    <h3 style={{ fontWeight: "bold" }}>Video</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Video editor</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "160px",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="https://www.w3schools.com/howto/img_snow.jpg"
                      width="100%"
                      height="96px"
                    />
                  </div>
                  <div style={{ marginTop: "10px", lineHeight: "1" }}>
                    <h3 style={{ fontWeight: "bold" }}>Social Media &</h3>
                    <h3 style={{ fontWeight: "bold" }}>Video</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Video editor</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "160px",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="https://www.w3schools.com/howto/img_snow.jpg"
                      width="100%"
                      height="96px"
                    />
                  </div>
                  <div style={{ marginTop: "10px", lineHeight: "1" }}>
                    <h3 style={{ fontWeight: "bold" }}>Social Media &</h3>
                    <h3 style={{ fontWeight: "bold" }}>Video</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Video editor</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "160px",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="https://www.w3schools.com/howto/img_snow.jpg"
                      width="100%"
                      height="96px"
                    />
                  </div>
                  <div style={{ marginTop: "10px", lineHeight: "1" }}>
                    <h3 style={{ fontWeight: "bold" }}>Social Media &</h3>
                    <h3 style={{ fontWeight: "bold" }}>Video</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Video editor</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "160px",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src="https://www.w3schools.com/howto/img_snow.jpg"
                      width="100%"
                      height="96px"
                    />
                  </div>
                  <div style={{ marginTop: "10px", lineHeight: "1" }}>
                    <h3 style={{ fontWeight: "bold" }}>Social Media &</h3>
                    <h3 style={{ fontWeight: "bold" }}>Video</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Video editor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Topbar
