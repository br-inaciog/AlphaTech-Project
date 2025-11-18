import React from "react";
import "./toogle.css"

const Toggle = (props) => {
    return (
        <>
            <div className="teste">
                <label className="switch">
                    <input type="checkbox"
                    checked={props.presenca} 
                    onChange={props.manipular}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    )
}

export default Toggle;
