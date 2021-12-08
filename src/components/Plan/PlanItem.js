
import React from 'react'
import crown from '../../icons/svgexport-23.svg'
import Button from '../Button/Button'
const PlanItem = ({heading,data,text,icon}) => {
    return (
      <div
        style={{
          margin: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <p
            className="heading"
            style={{
              marginBottom: "50px",
              textAlign: "center",
              fontSize: "25px",
            }}
          >
           {icon &&   <img src={crown} alt="crown" style={{width:"30px",height:"30px"}}/>}
            {heading}
          </p>
        </div>
        <div>
          <p
            className="heading"
            style={{
              marginBottom: "50px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "normal",
              color: "grey",
            }}
          >
            {data}
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <Button full text={text} />
        </div>
      </div>
    );
}

export default PlanItem

