import React from 'react'

const ImageItem = ({src}) => {
    return (
        <div style={{margin:"10px"}}>
            <img src={src} style={{   height: "144px",border: "1px solid black",borderRadius: "10px",maxHeight: "calc(100% - 30px)"}} alt=""/>
        </div>
    )
}

export default ImageItem
