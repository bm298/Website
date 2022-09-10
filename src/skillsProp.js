import React from "react";
import './App.css';

export default function skillsProp(props) {
    
    return(
        <div className='eachSkill'>
            {/* <img src={`../siteImages/${props.skillPic}`} className="cardSkill"></img> */}
            <img src={`./${props.skillPic}`} className="cardSkill"></img>
            <p className="eachSkillName">{props.skillName}</p>
        </div>
    )
}