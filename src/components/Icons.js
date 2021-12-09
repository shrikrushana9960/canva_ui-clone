import React from 'react'

const Icons = ({src,heading}) => {
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"50px",width:"50px",borderRadius:"50px",backgroundColor:"#5a79ed"}}>
            <img src={src} alt="" height="40px" width="40px"/>
           
        </div>
         <p style={{color:"white",fontSize:"12px",fontWeight:"500",marginTop:"10px"}}>{heading}</p>
        </div>
    )
}

export default Icons
