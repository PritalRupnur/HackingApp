//import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Accordian from './compenents/createcelebrities'
const celebrityData = require("../src/celebritiesdata.json");

var celebrities = celebrityData.map((x) => JSON.parse(JSON.stringify(x)));

function App() {
  // const [isDelete,setDelete] = useState(0);
  // const onDelete = (id) => {setDelete(id)};
  // if(isDelete){
  //   celebrities.splice(isDelete,1)
  //   setDelete = 0
  // }
  return (
    <div className="App">
        <Accordian celebrities={celebrities}/>
    </div>
  );
}

export default App;
