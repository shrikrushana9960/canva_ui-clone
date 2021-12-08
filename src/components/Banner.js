import React,{useEffect} from 'react'
import './banner.css'
import Button from "./Button/Button"
const Banner = ({src,heading,subheading,button,left,right,video,data}) => {
    
    return (
      <div
        class="flex-container"
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <div class="flex-item-left">
          {left && !video ? (
            <video width="95%" height="95%" playsInline loop>
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            video && <img src={src} alt="" width="95%" height="95%" />
          )}

          {!data ? (
            right && (
              <div style={{ textAlign: "left" }}>
                <p className="heading" style={{ marginBottom: "4px" }}>
                  {heading}
                </p>
                <p
                  style={{
                    maxWidth: "80%",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  {subheading}
                </p>
                <div style={{ textAlign: "left" }}>
                  <Button text={button} />
                </div>
              </div>
            )
          ) : (
            <div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "24px", marginRight: "10px" }}>
                  <i class="fa fa-folder" aria-hidden="true"></i>
                </p>
                <p
                  style={{
                    maxWidth: "80%",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Team folder to help stay orgnized, store brand, asset and
                  manage content
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "24px", marginRight: "10px" }}>
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                </p>
                <p
                  style={{
                    maxWidth: "80%",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Plan, create and shedule and publish your social media post
                  directly from Canva
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "24px", marginRight: "10px" }}>
                  <i class="fa fa-group" aria-hidden="true"></i>
                </p>
                <p
                  style={{
                    maxWidth: "80%",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Real time collobration across the countries, companies and
                  departments
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "24px", marginRight: "10px" }}>
                  <i class="fa fa-comment" aria-hidden="true"></i>
                </p>
                <p
                  style={{
                    maxWidth: "80%",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Build in comments to communicate , work, and resolve
                  suggestions in real time
                </p>
              </div>
            </div>
          )}
        </div>
        <div class="flex-item-right">
          <div className="text-container">
            {left && (
              <>
                <p className="heading" style={{ marginBottom: "4px" }}>
                  {heading}
                </p>
                <p
                  style={{
                    maxWidth: "80%",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  {subheading}
                </p>
                <div style={{ textAlign: "left" }}>
                  <Button text={button} />
                </div>
              </>
            )}
            {right && (
              <video class="video" id="vid" width="95%" height="95%" loop>
                <source src={src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    );
}

export default Banner
