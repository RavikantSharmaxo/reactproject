import { useState } from "react";
import Hello from "./Hello";
import "./Hello.css"
function Component(){
    let [numm,setNumm] =useState(0)
    let [num,setNum] = useState([1])
const adding =()=>{
    setNum(arr =>[...num,num.push(numm+1)])
    setNumm(numm+1)
}
const remove=()=>{
    setNum(arr=>[...arr,num.pop(numm)])
}
    return (
        <>
        <button className="design" onClick={adding}>Add Component</button>
        <button className="design" onClick={remove}>Remove Component</button>
        <div className="component">
        {num.map((num)=>{return <div><Hello/></div> })}
        </div>
       
        </>
    )
}
export default Component;