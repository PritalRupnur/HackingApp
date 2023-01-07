import "./popup.css";



const celebrityData = require("../celebritiesdata.json");

function popUp(props) {


  return props.trigger ? (
    <div className="PopUp">
      <div className="popupInner">
        <button className="deleteButton" >
          Delete
        </button>
        <button className="cancel" onClick={() => props.setTrigger(false)}>
          cancel
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default popUp;
