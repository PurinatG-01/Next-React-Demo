import React from "react";
import Layout from "../components/layout";

function reducer(state, action) {
  switch (action.task) {
    case "add-text":
      return { ...state, text: action.text };
    case "add-count":
      return { ...state, count: state.count + 1 };
  }
}

export default function p3() {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [callbackVal, setcallbackVal] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  const ref1 = React.useRef(0);
  const ref2 = React.useRef();

  const [obj, dispatch] = React.useReducer(reducer, { count: 0, text: "" });

  const opt = React.useMemo(() => {
    return value2 + 10;
  }, [value1]);

  const memorizedCallback = React.useCallback(() => {
    console.log(
      "Callback : " +
        (value1 + 1) +
        " : " +
        value2 +
        " : " +
        (callbackVal + 2) +
        " : " +
        (counter + 1)
    );
    setcallbackVal(callbackVal + 2);
  }, [value1]);

  return (
    <Layout>
      <div className="d-flex p-2 justify-content-center align-items-center">
        <h1 style={{ textAlign: "center" }}>
          <span className="badge badge-pill badge-success">Opt : {opt}</span>
          <br></br>
          <span className="badge badge-pill badge-warning">
            Callbackval : {callbackVal}
          </span>
          <br></br>
          <span className="badge badge-pill badge-info">Val 1 : {value1}</span>
          <br></br>
          <span className="badge badge-pill badge-info">Val 2 : {value2}</span>
          <br></br>
          <span className="badge badge-pill badge-info">
            Counter : {counter}
          </span>
        </h1>
        <button
          onClick={() => {
            setValue1(value1 + 1);
            setCounter(counter + 1);
            memorizedCallback();
          }}
          className="mx-2 btn btn-light"
          ref={ref2}
        >
          Click + value1
        </button>
        <button
          onClick={() => {
            setValue2(value2 + 1);
            setCounter(counter + 1);
            memorizedCallback();
          }}
          className="mx-2 btn btn-light"
        >
          Click + value2
        </button>
        <button
          onClick={() => {
            console.log(ref2);
            ref2.current.focus();
          }}
          className="btn btn-success"
        >
          Ref Button
        </button>
      </div>
      <form onSubmit={(e)=>{
          e.preventDefault()
          dispatch({task:'add-count'})

      }}>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch({ task: "add-text", text: e.target.value });
          }}
        />
        <h3>
          <span className="mx-2 badge badge-pill badge-success">
            {obj.text}
          </span>
          <span className="mx-2 badge badge-pill badge-warning">
            {obj.count}
          </span>
        </h3>
      </form>
    </Layout>
  );
}
