import React from 'react'
import "./Blogs.css"
const BlogItem = ({src,data}) => {
    return (
      <div style={{width:"320px",margin:"10px"}}>
        <div style={{height:"250px",width:"320px",borderRadius:"10px",overflow:'hidden'}}>
          <img src={src} alt="" className="zoom"/>
        </div>
        <p style={{marginTop:"10px",fontSize:"16px",fontWeight:"500"}}>{data}</p>  
      </div>
    );
}

export default BlogItem
