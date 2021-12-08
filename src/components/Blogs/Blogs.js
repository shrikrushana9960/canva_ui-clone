import React from 'react'
import BlogItem from './BlogItem';

const Blogs = () => {
    const items = [
      {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        data: " From the stack to the horizontal arrangement.You can create a basic grid system by using ",
      },
      {
        src: "https://images.unsplash.com/photo-1638957835514-224c57ffe617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        data: " From the stack to the horizontal arrangement.You can create a basic grid system by using ",
      },
      {
        src: "https://images.unsplash.com/photo-1638931422408-ccb074a0950f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        data: " From the stack to the horizontal arrangement.You can create a basic grid system by using ",
      },
      {
        src: "https://images.unsplash.com/photo-1633113092754-523fd2d9a90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        data: " From the stack to the horizontal arrangement.You can create a basic grid system by using ",
      },
      {
        src: "https://images.unsplash.com/photo-1633113092754-523fd2d9a90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        data: " From the stack to the horizontal arrangement.You can create a basic grid system by using ",
      },
      {
        src: "https://images.unsplash.com/photo-1633113092754-523fd2d9a90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        data: " From the stack to the horizontal arrangement.You can create a basic grid system by using ",
      },
      {
        src: "https://images.unsplash.com/photo-1633113092754-523fd2d9a90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        data: " From the stack to the horizontal arrangement.You can create a basic grid system by using ",
      },
    ];
    return (
        <div style={{borderBottom:"1px solid grey"}}>
      <div style={{ margin: "3%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "2%",
          }}
        >
          <p className="heading" style={{ marginBottom: "3%" }}>
            Loved by people and business around the world
          </p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", overflow: "scroll" }}
        >
          {items.map((item, index) => (
            <BlogItem src={item.src} data={item.data} />
          ))}
        </div>
      </div>
      </div>
    );
}

export default Blogs
