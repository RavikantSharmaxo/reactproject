import { useState } from "react";
import "./Hello.css"

function Hello(){
    const styled ={
        color:"red",
    }
    let [count,setCount] = useState(0)
    const added = ()=>{
        if( count == 20){
            alert("out of numbers max 20")
        }
        if(count< 20){
            setCount(count+1)
        }
    }
    const remove =()=>{
        if(count ==0){
            alert("we cannot go below zero ")
        }
        if(count>0){
            setCount(count-1)
        }   
    }
    return(<>
    <div className="div">
    <h2>count:{count}</h2>
<button className="design" onClick={added}>ADD{count}</button>
<button  className ="design" style = {styled}onClick={remove}>Remove{count}</button>
   
    </div>
 </>
);
    
}
export default Hello;