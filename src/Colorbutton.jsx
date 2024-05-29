import React from 'react'
import { useState } from 'react'
import "./index.css"

const Colorbutton = () => {
    let design = "w-[10%] h-[40px]"
    let [color,setColor] = useState("purple")
    let coloring ={
        background:color
    }
    
    const Red=()=>{
            setColor("red")
        
    }
    const Blue=()=>{
        setColor("blue")
    }
    const Green=()=>{
        setColor("green")

    }
    const Yellow=()=>{
        setColor("yellow")
    }
    const Pink=()=>{
        setColor("pink")
    }
    const Black=()=>{
        setColor("black")
    }
  return (
    <>
    <h1 style = {coloring}>ColorEffect:: {color}</h1>
    <div>
        <button className = "bg-red-500 w-[100px] h-[40px] rounded-[5px] m-5" onClick={Red}>Red</button>
        <button className = "bg-blue-500 w-[100px] h-[40px] rounded-[5px] m-5" onClick={Blue}>Blue</button>
        <button className = "bg-green-500 w-[100px] h-[40px] rounded-[5px] m-5" onClick={Green}>Green</button>
        <button className = "bg-pink-500 w-[100px] h-[40px] rounded-[5px] m-5" onClick={Pink}>Pink</button>
        <button className = "bg-yellow-500 w-[100px] h-[40px] rounded-[5px] m-5" onClick={Yellow}>Yellow</button>
        <button className = "bg-slate-900 w-[100px] h-[40px] rounded-[5px] m-5 text-white" onClick={Black}>Black</button>
    </div>
    </>
  )
}

export default Colorbutton