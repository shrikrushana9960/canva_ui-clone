import React from 'react'

const Icons = ({src}) => {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"60px",width:"60px",borderRadius:"50px",backgroundColor:"#5a79ed"}}>
            <img src={src} alt="" height="40px" width="40px"/>
        </div>
    )
}

export default Icons
