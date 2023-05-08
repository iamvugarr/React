import React, { useState } from "react";
import "./temprature.css";

const Temprature = () => {
  const [temprature, setTemprature] = useState(0);
  const [color, setColor] = useState("");

  function increase() {
    setTemprature(temprature + 1);
    if (temprature < 19 && temprature > 9) {
      setColor("orange");
    } else if (temprature < 9) {
      setColor("blue");
    } else if (temprature > 19) {
      setColor("red");
    }

    console.log(temprature);
  }

  function decrease() {
    setTemprature(temprature - 1);
    if (temprature < 19 && temprature > 9) {
      setColor("orange");
    } else if (temprature < 9) {
      setColor("blue");
    } else if (temprature > 19) {
      setColor("red");
    }
    console.log(temprature);
  }

  return (
    <div style={{ backgroundColor: color }} className="temp-card">
      <div className="temprature">
        <div className="circle">
          <p className="p">{temprature}</p>
        </div>
      </div>
      <div className="change">
        <button onClick={increase} className="increase">
          +
        </button>
        <button onClick={decrease} className="decrease">
          -
        </button>
      </div>
    </div>
  );
};

export default Temprature;
