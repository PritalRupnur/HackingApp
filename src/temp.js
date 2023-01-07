<div style={{ transitionDelay: "1s" }} className="allData">
  <div className="Data">
    <div className="innerContent">
      <h3>Country</h3>
      {country}
    </div>
    <div className="innerContent">
      <h3>Gender</h3>
      {gender}
    </div>
  </div>
  <h3 className="outerdescrip">Description</h3>
  <p>
    <div className="description">{description}</div>
  </p>
  <div className="footer">
    <div className="icons">
      <h3 className="editState" onClick={() => setIconState(!iconstate)}>
        <div onClick={() => editCelebrity(id)}>✏️</div>
      </h3>

      {!iconstate && (
        <h3 className="OpenState" onClick={() => setButtonPopup(true)}>
          🗑️
        </h3>
      )}
    </div>
    <div>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Are you sure you want to delete</h3>
      </PopUp>
    </div>
  </div>
</div>;
