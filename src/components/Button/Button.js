import React from 'react'
import './Button.css'
const Button = ({text,full,white}) => {
    return (
        <button className="b1" style={full ?{display:"flex",justifyContent:"center",width:"100%",textAlign:"center"}:white&&{color:"black",textAlign:"center",background:"lightgrey",fontWeight:"600"}}>{text}</button>
    )
}

export default Button
