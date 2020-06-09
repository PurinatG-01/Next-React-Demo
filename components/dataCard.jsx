import React, { useState } from "react";

const mainWrapperStyle = {
  borderRadius: "40px 19px 19px 19px",
  color: "#232323",
  boxShadow: "0px 0px 33px 19px rgba(0,0,0,0.08)",
  margin: "30px",
  display: "flex",
  right:'300'
};

const imgStyle = {
  borderRadius: "50%",
  width: "80px",
  height: "80px",
};

const contentStyle = {
    margin:"10px 15px"
}

const buttonWrapperStyle = {
    // background: "#e5e5e5",
    alignSelf: "center",
    justifySelf: "end",
    height: "100%",
    margin:"auto",
    marginRight: "30px",
    // boxShadow: "0px 0px 33px 19px rgba(0,0,0,0.05)",
    borderRadius:"5px",
    width:"wrap-content"
}

const btnStyle = {
    borderRadius:"50%",
}

// ===============================




export default (props) => {


    const [value, setvalue] = useState(props.data.value);

    return (
      <div className="mx-auto" style={mainWrapperStyle} >
        <img style={imgStyle} src="https://picsum.photos/80" alt="" />
        <div style={contentStyle}>
          <h6 style={{fontWeight:"bold"}}>{props.data.title}</h6>
          <p>{props.data.desc}</p>
        </div>
        <div style={buttonWrapperStyle}>
            <span className="badge badge-pill badge-warning">{value}</span>
            <button style={btnStyle} onClick={()=> {
              setvalue(value+1);
              props.callbackTotal(value+1,props.data.id)}} 
              className="btn btn-success m-2">+</button>
            <button style={btnStyle} onClick={()=> { 
              setvalue(value-1);
              props.callbackTotal(value-1,props.data.id)}} 
              className="btn btn-info m-2" >-</button>
            <button style={btnStyle} onClick={()=> { 
              props.callbackDelete(props.data.id)}} 
              className="btn btn-danger m-2" >X</button> 
        </div>
      </div>
    );
  
}
