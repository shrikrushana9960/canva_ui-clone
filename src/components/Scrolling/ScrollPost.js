import React,{useRef} from 'react'
import left from '../../icons/svgexport-5.svg'
import right from "../../icons/svgexport-17.svg";
import "./ScrollPost.css"
const ScrollPost = ({items,BlogItem}) => {
  const [visible,setVisible] = React.useState(false)
    const myRef = useRef(null);

    const scroll = (scrollOffset) => {
      if(myRef.current.scrollLeft>1){
        setVisible(true)
      
      }
      else{
        setVisible(false)
      }
      console.log(myRef.current.scrollLeft);
      myRef.current.scrollLeft += scrollOffset;
    };
    return (
      <div className="scroll-post">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            marginRight: "-30px",
          }}
        >
          {visible && (
            <button
              style={{
                zIndex: "2000",
                background: "white",
                float: "right",
                height: "50px",
                borderRadius: "50px",
                boxShadow: "1px 1px 1px grey",
                width: "50px",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => scroll(-1000)}
            >
              <img src={right} alt="left" />
            </button>
          )}
        </div>
        <div
          ref={myRef}
          style={{
            marginLeft:"20px",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflow: "scroll",
          }}
        >
          {items.map((item, index) => (
            <BlogItem src={item.src} data={item.data} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            marginLeft: "-30px",
            zIndex: "2000",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              float: "right",
              height: "50px",
              borderRadius: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              border: "none",
              boxShadow: "1px 1px 1px grey",
              alignItems: "center",
            }}
            onClick={() => scroll(1000)}
          >
            <img src={left} alt="left" />
          </button>
        </div>
      </div>
    );
}

export default ScrollPost
