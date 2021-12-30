import React, { useState, useEffect } from "react";
import Loader from "react-js-loader";

import "./Home.css";
import Login from "./Login";
export default function Home() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  return (
    <>
      {!load ? (
        <div className="Home">
          {" "}
          <Loader
            type="bubble-top"
            bgColor={"#023026"}
            title={""}
            color={"#023026"}
            size={100}
          />{" "}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
