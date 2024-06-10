import { useState } from "react";

const ButtonStyle = () => {
    let count1 = 0;
   const  arrayState =  useState(count1);
   const statenumber = arrayState[0];
   const stateFunction = arrayState[1];
   console.log(arrayState);
 const HandleClick3 = () => {
    //count1 = count1 + 1;
    //console.log("Handle click" + count1);
    stateFunction(statenumber + 1);
 }
 return <button onClick={HandleClick3}>{statenumber}</button>
}

export default ButtonStyle;