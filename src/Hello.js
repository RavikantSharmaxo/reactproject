import { useState } from "react";

function Hello(){
    let [count,setCount] = useState(0)
    const added = ()=>{
        console.log("added")
        
        if(count< 20){
            setCount(count+1)
        }
    }
    const remove =()=>{
        console.log("remove")
        if(count>0){
            setCount(count-1)
        }
        
        
    }
    return(<>
    <h2>hello world from {count}</h2>
<button onClick={added}>ADD</button>
<button onClick={remove}>Remove</button>
    </>
);
    
}
export default Hello;