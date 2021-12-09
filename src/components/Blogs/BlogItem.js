import React from 'react'
import "./Blogs.css"
const BlogItem = ({src,data}) => {
    return (
      <div style={{margin:"10px"}}>
        <div className="imageContainer" >
          <img src={src} alt="" className="zoom"/>
        </div>
        <p style={{marginTop:"10px",fontSize:"16px",fontWeight:"500"}}>{data}</p>  
      </div>
    );
}

export default BlogItem
