import React from "react";

export const history=() =>{
   const localData=JSON.parse (localStorage.getItem("city" ))
    return(
        <div>
                <h1>{localData}</h1>
                
        </div>
    )
}