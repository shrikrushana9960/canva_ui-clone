import React from 'react'
import ImageItem from '../ImageItem'
import "./ScrollOption.css"
const ScrollOption = ({firstData}) => {
    return (
        <div>

               {firstData.map((item, index) => {
            return <ImageItem src={item} />;
          })}
    
        </div>
    )
}

export default ScrollOption
