import {Input} from 'antd'
import left from "../icons/svgexport-5.svg";
import right from "../icons/svgexport-17.svg";
import first from '../icons/svgexport-9.svg'
import second from '../icons/svgexport-10.svg'
import third from '../icons/svgexport-11.svg'
import fourth from '../icons/svgexport-12.svg'
import five from '../icons/svgexport-13.svg'
import six from '../icons/svgexport-14.svg'
import seven from '../icons/svgexport-15.svg'
import Icons from './Icons'
import React,{useRef} from 'react'
import ImageItem from './ImageItem'
const SearchBar = () => {
    const [visible, setVisible] = React.useState(false);
    const myRef = useRef(null);

    const scroll = (scrollOffset) => {
      if (myRef.current.scrollLeft > 1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      console.log(myRef.current.scrollLeft);
      myRef.current.scrollLeft += scrollOffset;
    };
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
              width: "60%",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Icons src={first} heading={"For you"} />
            <Icons src={second} heading="Presentations" />
            <Icons src={third} heading="Social media" />
            <Icons src={fourth} heading="Video" />
            <Icons src={five} heading="Print Product" />
            <Icons src={six} heading="Marketing" />

            <Icons src={seven} heading="Office" />
            <Icons src={six} heading="more" />
          </div>
        </div>

        <div
          ref={myRef}
          style={{
            display: "flex",

            borderRadius: "0px 0px 10px 10px",
            overflowX: "scroll",

            alignItems: "center",
            width: "95%",
            background: "#eff2f2",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "20px",
            display: "flex",
          }}
        >
          <button
            style={{
              zIndex: "2000",
              background: "white",
              float: "right",
              height: "40px",
              marginLeft: "-3%",
              borderRadius: "40px",
              boxShadow: "1px 1px 1px grey",
              width: "40px",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            }}
            onClick={() => scroll(-1000)}
          >
            {" "}
            <img src={right} alt="left" />
          </button>
          <div style={{ display: "flex", width: "90%" }}>
            {firstData.map((item, index) => {
              return <ImageItem src={item} data={index} />;
            })}
          </div>
          <button
            onClick={() => scroll(1000)}
            style={{
              position: "absolute",
              marginLeft: "92%",
              zIndex: "2000",
              background: "white",
              float: "right",
              height: "40px",
              borderRadius: "40px",
              boxShadow: "1px 1px 1px grey",
              width: "40px",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={left} alt="left" />
          </button>
        </div>
      </div>
    );
}

export default SearchBar
