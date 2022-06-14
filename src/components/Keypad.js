// Code Keypad Component Here
import React from "React";
function change() {console.log('Entering password...')}

function Keypad() {
    return <input type= "password" onChange={change}></input>
    
    ;
}

export default Keypad;
