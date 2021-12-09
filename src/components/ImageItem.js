import React from 'react'
import "./ImageItem.css"
const ImageItem = ({src,data}) => {
    return (
        <div className="imagePost" style={{margin:"10px"}}>
            <img src={src} style={{   height: "140px",border: "1px solid black",borderRadius: "10px",maxHeight: "calc(100% - 30px)"}} alt=""/>
            <p style={{margin:"4px",fontWeight:"600"}}>{data}</p>
            <p className="details">{data} X {data} mm</p>
        </div>
    )
}

export default ImageItem
