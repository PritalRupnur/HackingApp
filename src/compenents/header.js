
import MyAccordian from "./accordian";
import "../accordian.css";

const Title = (props) => {
  

  return (
    <>
    <div className="SingleUser">
      <div className="main-heading">
        <div className="Image">
          <img alt=""
            style={{ maxWidth: "100%", height: "55px", borderRadius: "100%", borderStyle: "solid", borderWidth:"thin", borderColor:"grey" }}
            src={props.picture}
          ></img>
        </div>
        <div>
          <h3 className="Name">
            {props.first} {props.last}
          </h3>
        </div>
        <div className="collapseIcon" onClick={props.onShow}>
          <strong>{props.isActive ? "➖" : "➕"}</strong>
        </div>
      </div>
           
      {props.isActive && (
        <MyAccordian
          gender={props.gender}
          country={props.country}
          description={props.description}
          id={props.id}
          age={props.age}
          
        />
      )}
      </div>
    </>
  );
};

export default Title;
