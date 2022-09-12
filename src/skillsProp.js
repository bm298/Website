import React from "react";
import './App.css';

export default function skillsProp(props) {
    
    return(
        <div className='eachSkill'>
            <img src={`/Website/siteImages/${props.skillPic}`} className="cardSkill"></img>

            <p className="eachSkillName">{props.skillName}</p>
        </div>
    )
}