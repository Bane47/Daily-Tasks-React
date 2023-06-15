import React from 'react';
import { useState } from "react";
export default function Calculate(){
    // const a = 0;
    // const b = 0;
    var [a,changeA]=useState(0);
var [b,changeB]=useState(0);
var[c,setResult]=useState(0);

const handleA=(e)=>{
   changeA ((e.target.value))
}
const handleB=(e)=>{
    changeB(((e.target.value)))
}

const add=()=>{

c=Number(a)+Number(b);
setResult(Number(c))

}
const subtract=()=>{
    c=Number(a)-Number(b);
    setResult(Number(c))
}
const multiply=()=>{
    c=Number(a)*Number(b);
    setResult(Number(c))
}
const divide=()=>{
    c=Number(a)/Number(b);
    setResult(Number(c))
}

return(
    <div>
        <h1>Calculator-using functional components</h1>
        <input type="text" value={a} onChange={(e)=>{handleA(e)}} placeholder='Enter the first number'/><br></br>
        <input type="text" value={b} onChange={(e)=>{handleB(e)}} placeholder='Enter the second number'/><br></br>

<button  onClick={add} >Add</button>
<button  onClick={subtract} >Subtract</button>
<button  onClick={multiply} >Product</button>

<button  onClick={divide} >Divide</button>

<p>Result:{c}</p>
    </div>
)

}
