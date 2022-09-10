import React from "react";
import './navBar.css';

export default function NavBar(props) {
    
    return(
        
        <ul className='navBarItemsMobile'>
            <li onClick={props.closeNavbar} className='eachNavMobile'><a onClick={props.navBarGoToAboutSection}> ABOUT </a></li>
            <li onClick={props.closeNavbar} className='eachNavMobile'><a onClick={props.navBarGoToTechStackSection}> SKILLS </a></li>
            <li onClick={props.closeNavbar} className='eachNavMobile'><a onClick={props.navBarGoToPortfolioSection}> PORTFOLIO </a></li>
            <li onClick={props.closeNavbar} className='eachNavMobile'><a onClick={props.navBarGoToContactSection}> CONTACT </a></li>
       </ul>
    )
}
