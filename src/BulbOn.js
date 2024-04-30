import React, { useState } from "react";
import bulbon from './Assets/Images/bulb-on.png';
import bulboff from './Assets/Images/bulb-off.png';

export const BulbOnOFF = () => {
    const [light, setLight] = useState(false);
    const toggleDisplay = () => {
        setLight(!light);
    };
    return(
        <div className={"bulb-wrap " + (light ? "off" : "on")}>
            {light ? 
            ( <img src={bulboff} alt="Bulb-Off"/>) : 
            ( <img src={bulbon} alt="Bulb-on"/>)
            }
            <button onClick={toggleDisplay}>Light {light ? "on" : "off"}</button>
        </div>
    )
}