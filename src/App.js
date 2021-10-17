import './App.css';
import React, {useState} from "react"

const App =() =>{
  
  let time= new Date().toLocaleTimeString();
  const [ctime, setCtime] =useState(time);
  const UpdateTime =() =>{
    time= new Date().toLocaleTimeString();
    var second=new Date().getSeconds();
    if(second%2==0){
      document.body.className="even"
    }else
    {
      document.body.className="odd"
    }
    setCtime(time)
  };

   setInterval(UpdateTime,1000);
  return(
    <>
      <center>
      <h1>{ctime}</h1>
    
      </center>
    </>
  );
};

export default App;
