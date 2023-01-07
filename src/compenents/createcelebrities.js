import React from "react";
import { useState } from "react";

import "../accordian.css";
import Title from "./header.js";



const Accordian = ({ celebrities,onDelete }) => {
  const [data] = useState(Object.values(celebrities));
  const [activeIndex, setActiveIndex] = useState(0);

  function calculateAge(dob){
    
      const birthDate = new Date(dob); 
      const difference = Date.now() - birthDate.getTime();
      const age = new Date(difference);
    
      return Math.abs(age.getUTCFullYear() - 1970);
    
  }

  return (
    <>
      <section className="main-div">
        <h1>Celebrity Details</h1>
        <div className="NavBar">
          <form
            style={{ margin: "auto", alignItems: "center", width: "700px" }}
          >
            <input className="icon" type="text" placeholder="Search User" />
          </form>
        </div>

        {data.map((curElem) => {
          const index = curElem.id;
          const age = calculateAge(curElem.dob)
          
          const isActive = index === activeIndex;
          const onShow = () => setActiveIndex(isActive?false:index);
          const object = { ...curElem, isActive, onShow, age };
          return <Title {...object} />;
          
        })}
      </section>
    </>
  );
};

export default Accordian;
