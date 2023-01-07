import React, { useState } from "react";
import PopUp from "./popUp";
import "../accordian.css";
import "./popup.css";


const Myaccordian = ({ age, gender, description, country, id  }) => {
   var prevData = {age, gender, description, country, id }
  
  const [defaultData, setDefaultData] = useState({
    gender: gender,
    description: description,
    country: country,
    age: age,
  });
  const [buttonPopup, setButtonPopup] = useState(false);
  const [iconstate, setIconState] = useState(false);
  var [updateState, setUpdatestate] = useState(false);
  const [Gender, setGender] = useState("");
  const [Description, setDescription] = useState("");
  const [Country, setCountry] = useState("");
  const[Age,setAge]=useState("")
  
  
  const options = ['Male','Femal','Transgender','Rather not say', 'Other']
  function handleSubmit(e) {
    e.preventDefault();

    setDefaultData({
      age: Age===""?defaultData.age:Age,
      gender: Gender===""?defaultData.gender:Gender,
      description:Description===""?defaultData.description:Description,
      country: Country===""?defaultData.country:Country,
    });
    setAge("")
    setGender("");
    setCountry("");
    setDescription("");
    setUpdatestate(false);
  }
  if (!updateState) {
    return (
      <div style={{ transitionDelay: "1s" }} className="allData">
        <div className="Data">
          <div className="innerContent">
            <h3 style={{ color: "Grey"}}>Age</h3>
            {defaultData.age}
          </div>

          <div className="innerContent">
            <h3 style={{ color: "Grey"}}>Country</h3>
            {defaultData.country}
          </div>
          <div className="innerContent">
            <h3 style={{ color: "Grey"}}>Gender</h3>
            {defaultData.gender}
          </div>
        </div>
        <h3 className="outerdescrip" style={{ color: "Grey"}} >Description</h3>
        <p>
          <div className="description" >{defaultData.description}</div>
        </p>
        <div className="footer">
          <div className="icons">
            <h3 className="OpenState" onClick={() => setIconState(!iconstate)}>
              <div onClick={() => setUpdatestate(true)}>✏️</div>
            </h3>

            <h3 className="OpenState" onClick={() => setButtonPopup(true)}>
              🗑️
            </h3>
          </div>
          <div>
            <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} id={id} >
              <h3>Are you sure you want to delete</h3>
            </PopUp>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(prevData.description)
    
    return (
      <div style={{ transitionDelay: "1s" }} className="allData">
        <form onSubmit={handleSubmit}>
          <div className="Data">
            <div className="Age">
              <h3 style={{ color: "Grey"}}>Age</h3><input type="number" name="quantity" min="18" max="80" value={Age}
               onChange={(e) => setAge(e.target.value)} 
               >

               </input>
              
            </div>
            <div className="innerContent">
              <h3 style={{ color: "Grey"}}>Country</h3>
              <input
                type="text"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
            </div>
            <div className="innerContent">
            <div className="dropdown">
              <div ><h3 style={{ color: "Grey"}} >Gender</h3>
              
            <span className="fas fa-caret-down"></span>
             </div>
             <select value={Gender}
                onChange={(e) => setGender(e.target.value)}>
              <option  value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather not say">Rather Not Say</option>
              <option value="Other">Other</option>
            </select>
            </div> 
            </div>
          </div>
          <h3 className="outerdescrip" style={{ color: "Grey"}}>Description</h3>
          <p>
            <input
              type="textarea"
              value={Description}
              
              
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </p>

          <div className="footer">
            <div className="icons">
              <h3 className="editState" onClick={() => setUpdatestate(false)}>
                <div>❌</div>
              </h3>

              <h3 className="editState">
                <button type="submit">✅</button>
              </h3>
            </div>
            <div>
              <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Are you sure you want to delete!!</h3>
              </PopUp>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Myaccordian;
