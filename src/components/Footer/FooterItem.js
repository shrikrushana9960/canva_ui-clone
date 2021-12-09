import React from 'react'

const FooterItem = ({items,heading}) => {
    return (
        <div>
              <p className="heading" style={{fontSize:"25px"}}>{heading}</p>
              {items.map((item, index) =><p  className="subValue">{item}</p> )}
        </div>
    )
}

export default FooterItem
