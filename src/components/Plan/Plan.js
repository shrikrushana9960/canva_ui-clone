import React from 'react'
import { Row, Col } from "antd";
import PlanItem from './PlanItem';
import "./PlanContainer.css";
const Plan = () => {
    const compnay = [
      "https://static.canva.com/web/images/f6f70aacaee7fe46159da69b0f0ddfe6.png",
      "https://static.canva.com/web/images/54bfd0f79706de4b3bae74cf7a168204.png",
      "https://static.canva.com/web/images/b875c9819a6b2e654747f437199feb0f.png",
      "https://static.canva.com/web/images/7fdd93504544c2a5b6cb8230384f7a25.png",
      "https://static.canva.com/web/images/d7b3dcb0760e7210a14c4faee977e49e.png",
      "https://static.canva.com/web/images/e641124f6dcfd7c7bfafb05bb000905d.png",
    ];
    return (
      <div style={{ margin: "10%", width: "80%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "2%",
          }}
        >
          <p className="heading" style={{ marginBottom: "3%" }}>
            Template for absoluty anything
          </p>
        </div>
        <div
          className="plan-container"
        >
          
            <PlanItem
              heading="Canva Free"
              data="For people and teams wanting to design absolutly anything, from logos and social media content 
     to documents, prints and more. Tons of free to bring your vision to life."
              text="Get Canva Fress"
            />
          
          
            <PlanItem
              heading="Canva Pro"
              data="For people and teams wanting to collobrate and grow their business. Inculudes social sheduling, team templates, brand management and more. and other productive tools"
              text="Start free trial"
              icon
            />
          
          
            <PlanItem
              heading="Canva Enterprise"
              data="For the large orgniaztaion needing to design and communication tools at scale. Simplify your teams work with integration every day, advanced security and built in approvel workflows minimum 20 Users."
              text="Request a demo"
            />
          
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "2%",
          }}
        >
          <p>
            Canva Pro is free for{" "}
            <a href="#" style={{ textDecorationLine: "underline" }}>
              eduction
            </a>{" "}
            and{" "}
            <a href="#" style={{ textDecorationLine: "underline" }}>
              {" "}
              nonprofits
            </a>
          </p>
        </div>
        <div
        className="plan-container"
          style={{
            
            justifyContent: "space-around",
           
          }}
        >
            {compnay.map((item, index) => <img src={item} height="50px"/>)}
            
        </div>
      </div>
    );
}

export default Plan
