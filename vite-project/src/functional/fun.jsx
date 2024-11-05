
import { useState } from "react"



function Hook(){

    var [a,seta]=useState(0);
    function env(){
        seta((ps)=>{
            console.log(ps);

            return ps+1
            
        })
        // seta(a+1)
     }

     var dec=()=>{
        seta(a-1)

     }

    return (
        <>
        <h1>TODO</h1>
        <center><h2>{a}</h2></center>
        <button  onClick={env}>ADD</button>
        <button  onClick={dec}>SUB</button>

        </>
    )
}

export default Hook;
