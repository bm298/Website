import React from "react";
import './App.css';
import cssInSrc from './cssInSrc.png'
import inspiredAir from './inspiredAir.jpg'

export default function skillsProp(props) {
    
    return(
        <div className='eachSkill'>
            {/* <img src={`../siteImages/${props.skillPic}`} className="cardSkill"></img> */}
            <img src={`./${props.skillPic}`} className="cardSkill"></img>
            <img src={`./cssInSrc.png`} className="cardSkill"></img>
            <img src={cssInSrc} className="cardSkill"></img>
            <img src={inspiredAir} className="cardSkill"></img>
            
            <p className="eachSkillName">{props.skillName}</p>
        </div>
    )
}