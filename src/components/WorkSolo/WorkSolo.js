import React from 'react'
import Button from '../../components/Button/Button'
import Banner from '../Banner'
const WorkSolo = () => {
    return (
      <div>
        {" "}
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
          <p
            style={{ fontSize: "18px", fontWeight: "lighter  ", color: "grey" }}
          >
            Customize an office templates, or design something more personal,
            like an invition
          </p>
        </div>
        <Banner
          src="https://static.canva.com/anon_home/teams-en-974x720.mp4"
          heading="no"
          subheading="no"
          video={false}
          button="no"
          data
          right
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <Button text={"See Work solutions"} white />
        </div>
      </div>
    );
}

export default WorkSolo
