const TopBarItem = ({src,heading,data}) => {
    return (
        
            <div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "160px",
                      overflow: "hidden",
                    }}
                  >
                    {" "}
                    <img
                      src={src}
                      width="100%"
                      height="96px"
                    />
                  </div>
                  <div style={{ marginTop: "10px", lineHeight: "1" }}>
                    <h3 style={{ fontWeight: "bold" }}>{heading}</h3>
                {data.map((item,index)=><p>{item}</p>)}
                
                  </div>
               
            
        </div>
    )
}

export default TopBarItem;
