import React from "react";

export const history = () => {
    const localData = localStorage.getItem("City name");
    const local = localStorage.getItem("country");
    JSON.parse(localData)
 //   const localData = localStorage.getItem("weather description");
  //  const localData = localStorage.getItem("weather temp_min");
 //   const localData = localStorage.getItem("weather temp_max");
    return (
        <div>
            <h1>History page</h1>
            <p>hello</p>
            <li>{localData}</li>
            <li>{local}</li>
        </div>
    )
}