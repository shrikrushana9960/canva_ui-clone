import {Input} from 'antd'
import first from '../icons/svgexport-9.svg'
import second from '../icons/svgexport-10.svg'
import third from '../icons/svgexport-11.svg'
import fourth from '../icons/svgexport-12.svg'
import five from '../icons/svgexport-13.svg'
import six from '../icons/svgexport-14.svg'
import seven from '../icons/svgexport-15.svg'
import Icons from './Icons'
import React from 'react'
import ImageItem from './ImageItem'
const SearchBar = () => {

    const [Menu, setMenu] =React.useState("first")
    const firstData = [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    ];
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "95%",
            borderTopLeftRadius: "10px",
             borderTopRightRadius: "10px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundImage:
              "linear-gradient(to bottom right, #02c1cd, #7d2ae8)",
          }}
        >
          <h1
            style={{ color: " white ", marginTop: "20px", fontWeight: "bold" }}
          >
            What will you design ?
          </h1>

          <Input
            type="text"
            prefix={<i class="fa fa-search"></i>}
            style={{
              border: "none",
              width: "40%",
              height: "40px",
              marginTop: "20px",
              borderRadius: "10px",
            }}
            placeholder="Try Logo,Poster,anything!"
          />

          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Icons src={first} />
            <Icons src={second} />
            <Icons src={third} />
            <Icons src={fourth} />
            <Icons src={five} />
            <Icons src={six} />
            <Icons src={seven} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            background:"#f8f9f9",
            borderRadius: "0px 0px 10px 10px",
            overflowX: "scroll",
            backgroundColor: "white",
            alignItems: "center",
            width: "95%",
            borderBottomRadius: "10px",
            padding: "20px",
            display: "flex",
          }}
        >
            {firstData.map((item,index)=>{
                return <ImageItem src={item}/>
            })}
       
        </div>
      </div>
    );
}

export default SearchBar
