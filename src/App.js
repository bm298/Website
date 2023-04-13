 import './App.css';
import React, {useEffect, useRef} from 'react';
import NavBar from './navBar';
import SkillsProp from './skillsProp';
import AddSkills from './addSkills';
import inspiredAir from './inspiredAir.jpg'
import formUpdated from './formUpdated.jpg'
import portfolioCurrent from './portfolioCurrent.jpg'
import primeLocation from './primeLocation.jpg'
import ShiftTracker from './shiftTracker.jpg'
import Programming from './programming.jpeg'
import {GoPrimitiveDot} from 'react-icons/go';
import {FaUserTie,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';
import {HiOutlineMenu} from 'react-icons/hi';
import Typed from 'react-typed'
import emailjs from '@emailjs/browser';

function App() {

//Scrolling Nav color change
const [bgNavColor, setBgNavColor] = React.useState(false);

// Mobile Nav Menu
const [openBurgMenu, setOpenBurgerMenu]= React.useState(false)

// erorrs in form added to state
const [formErrors, setFormErrors] = React.useState([])

// isSubmit triggered when form completed successfully 
const [isSubmit, setIsSubmit] = React.useState(false)  


function ChangeBgColor(){
  if (window.scrollY>=130){
    setBgNavColor(true)
  }
  else{
    setBgNavColor(false)
  }
}

window.addEventListener("scroll", ChangeBgColor )

// Click NavBar Items to scroll to page sections

let aboutSection = useRef(null)
let techStackSection = useRef(null)
let portfolioSection = useRef(null)
let contactSection = useRef(null)

function goToAboutSection (){
window.scrollTo({
top: aboutSection.current.offsetTop
})
}

function goToTechStackSection (){
  window.scrollTo({
  top: techStackSection.current.offsetTop
  })
  }

function goToPortfolioSection (){
  window.scrollTo({
   top: portfolioSection.current.offsetTop
  })
  }

function goToContactSection (){
  window.scrollTo({
  top: contactSection.current.offsetTop
  })
  }

// Send Email Functions

const [formData, setFormData] = React.useState({
  name: "",
  user_email:"",
  subject: "",
  message: "",
})

function handleChange(event) {
  const {name, value, type} = event.target
  setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
  }))
}

// UseEffect start to validate Form
const form= useRef()

React.useEffect(() => {
if (Object.keys(formErrors).length === 0 && isSubmit){
   emailjs.sendForm('service_5o8s4aa',
   'template_na0abfl',
   form.current,
   'NfXUcrnviOYVvdx-e'
   )
   .then((result) => {
    console.log(result.text);
    console.log("message sent");
    //  e.target.reset()
    },
    (error) => {
    console.log(error.text);
  })
// Clear Input fields after message sent
  setFormData({
    name: "",
    user_email:"",
    subject: "",
    message: "",
  })

}
},[formErrors])

// UseEffect End


  // Validate input each input field 
  function sendEmail(e){
    e.preventDefault()

  if (validate(formData)){
  setIsSubmit(true)
  setFormErrors(validate(formData))
  e.target.reset()
    }
  }

  function validate (values){
    const errors= {}
    if (values.name.length===0){
      errors.name= "*Name is required"
    }

    if (values.user_email.length===0){
      errors.user_email= "*Email is required"
    }

    if (values.subject.length===0){
      errors.subject= "*Subject is required"
    }
  
    if (values.message.length===0){
      errors.message= "*Message is required"
    }
  return errors
  }
// END OF SUBMIT EMAIL


// mapped function to render each skill in skills section
  let eachSkill = AddSkills.map(skills => {
    return (
          <div>
        <SkillsProp
            skillPic={skills.skillPic}
            skillName={skills.skillName}
        />
        </div>
    )
  })

  return (
    <div>
    {/* navBar section Start */}
    <div className={bgNavColor ? 'navBarScroll' : 'navBar' }>
           <div className='bm'>
            <h3 className={bgNavColor? "bmH3Scroll":""}>BM</h3>
            <span><GoPrimitiveDot style={{fill:'gold'}}/></span>
           </div>
          <HiOutlineMenu className='hamburgerMenu' onClick={() => setOpenBurgerMenu(!openBurgMenu) } />
          <div>
            <div>
              <ul className='navBarItems'>
              <li><a onClick={goToAboutSection} className={bgNavColor? "eachNavScroll":"eachNav"}> About </a></li>
              <li><a onClick={goToTechStackSection} className={bgNavColor? "eachNavScroll":"eachNav"}> Skills </a></li>
              <li><a onClick={goToPortfolioSection} className={bgNavColor? "eachNavScroll":"eachNav"}> Portfolio </a></li>
              <li><a onClick={goToContactSection} className={bgNavColor? "eachNavScroll":"eachNav"}> Contact </a></li>
              </ul>
            </div>
            
            <div className='mobileNav'>
            {openBurgMenu && 
            <NavBar
            navBarGoToAboutSection={goToAboutSection}
            navBarGoToTechStackSection={goToTechStackSection}
            navBarGoToPortfolioSection={goToPortfolioSection}
            navBarGoToContactSection={goToContactSection}
            closeNavbar={() => setOpenBurgerMenu(false)} 
            />
            }

            </div>

          </div>
    </div>
    {/* navBar section End */}

  
    <div className='container'>
        {/* Full height/width hero section  */}
        <div className='backgroundOverlay'>
        <div className='contentContainer'>
          <div className="content1">

              <Typed className='contentTyped'
                  strings={[
                    "Hi, I'm <span id='heroName'>Bilal Musa</span><br/>A Frontend Web Developer"]}
                  typeSpeed={60}
                  backSpeed={30}
                  loop
                  loopCount={2}
                  />

            <div className='contactMeBtnContainer'>
            <a onClick={goToContactSection}>
              <button className='contactMeHero'>
                  Contact Me
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
      {/* End of hero section */}
      
      {/* Start of About section */}
        <div className='aboutContainer'>
            <div className='about' ref={aboutSection}>
              <h2 id='aboutText'>About Me</h2>
            </div>
            <div className='aboutInfoContainter'>
              <div className='about40'>
                <div className='picContainer'>
                  <img src={Programming} id="programmingPic"/>
                </div>
              </div>
              <div className='about60'>
                <p id='aboutInfo'> 
                Hey there Im Bilal, a motivated, passionate front-end web developer based in the UK! I enjoy creating awesome, eye-catching web applications that offer a seamless end experience for users. 
                <br/><br/>
                Let me tell you, learning to code was no walk in the park, but it definitely has been rewarding. <br/><br/>
                I'm at a point where I can build multipage websites with my HTML and CSS skills, and I've spent time exercising my JavaScript skills, including working 
                with APIs and getting comfortable with object-oriented programming and DOM manipulation. <br/><br/>
                As this is an ever-evolving and adapting industry, I've kept my skills up-to-date by learning and using frameworks and tools including React.js, Next.js
                and Styled components. <br/><br/>
                Basically , being a developer allows me to continuously learn and improve myself, and <span style={{color:"gold", fontWeight:"500", fontSize:"1.1rem"}}>I love that!</span>

                </p>
              </div>
            </div>
        </div>
      {/* End of About section */}

    {/* Start of skills section */}
    <div className='skillsContainer'>
      <div className='skillsTotal' ref={techStackSection}>
        <h2 id='techStackText'>Skill Stack</h2>
      </div>
      <div className='totalSkills'>
        <div className='skills'>
            {eachSkill}
        </div>
      </div>
    </div>
    {/* End of About section */}
    

      {/* Start of Portfolio section */}    
      <div className='portfolioContainer'>
          <div className='portfolio' ref={portfolioSection}>
            <h2 id='portfolioText'>Portfolio</h2>
          </div>

          <div className='eachProject'>

            <div id='portfolioBoxes'>
              <div className='image'>
              <img src={ShiftTracker} className='portfolioImages' />
                <div className='portfolioBoxesOverlay'>
                <h2>Shift Tracker</h2>
                <p>-Implemented main features of CRUD app</p>
                <p>-Created custom website to track all self employed workers shifts in a systematic format</p>
                <p>-Through input of shift details, it calculates Tax Amount, Total Amount Received and Total After Tax</p>
                <p>-Top modal keeps running total of all key values and dynamically changes when each shift is added, making tasks such as end of year tax calculations easier</p>
                  <div className='overlayBtns'>
                   <a href='https://github.com/bm298/shiftTracker' target="_blank"> <button className='liveCode'>Source Code</button> </a>
                    <a href='https://bm298.github.io/shiftTracker/' target="_blank"> <button className='liveSite'>Live Site</button> </a>
                  </div>
                </div>
              </div>
            </div>

            <div id='portfolioBoxes'>
              <img src={formUpdated} className='portfolioImages' />
                <div className='portfolioBoxesOverlay'>
                  <h2>GIT Registration</h2>
                  <p>- Built a form that receives user inputs and validates them in order to progress to form submission</p>
                  <p>-Form features include Controlled components, Validation, Conditional rendering based on user input and handling form submission</p>
                  <p>-Upon successful completion "Submit" button appears and once clicked pop up emerges showing successful completion and "Download" button for GIT cheatsheet </p>
                  <div className='overlayBtns'>
                   <a href='https://github.com/bm298/FormUpdate' target="_blank"> <button className='liveCode'>Source Code</button> </a>
                   <a href='https://bm298.github.io/FormUpdate/' target="_blank"> <button className='liveSite'>Live Site</button> </a>
                  </div>
                </div>
            </div>

            <div id='portfolioBoxes'>
              <div className='image'>
              <img src={primeLocation} className='portfolioImages' />
                <div className='portfolioBoxesOverlay'>
                <h2>Prime Location</h2>
                <p>-Property Website made using HTML CSS and React </p>
                <p>-Slider function implemented through import of NPM React slider </p>
                <p>-Ability to filter properties through price and/or search bar depending on location and sort individual properties depending on price</p>
                <p>-Viewing preference adjustable through grid or list view. </p>
                  <div className='overlayBtns'>
                   <a href='https://github.com/bm298/primeLocation' target="_blank"> <button className='liveCode'>Source Code</button> </a>
                   <a href='https://bm298.github.io/primeLocation/' target="_blank"> <button className='liveSite'>Live Site</button> </a>
                  </div>
                </div>
              </div>
            </div>

            <div id='portfolioBoxes'>
              <div className='image'>
              <img src={inspiredAir} className='portfolioImages' />
                <div className='portfolioBoxesOverlay'>
                <h2>Modified Airbnb </h2>
                <p>-Built a modified, responsive Airbnb website using React.js, HTML, and CSS</p>
                <p>First instance in using "props" to implement in other functions</p>
                <p>-Implemented features such as product search, clickable “Like” feature, day and night toggle mode and reusable React components</p>
                <p>-Used React Router to route to new page with new components and styling</p>
                  <div className='overlayBtns'>
                   <a href='https://github.com/bm298/airbnbSite' target="_blank"> <button className='liveCode'>Source Code</button> </a>
                   <a href='https://bm298.github.io/airbnbSite/' target="_blank"> <button className='liveSite'>Live Site</button> </a>
                  </div>
                </div>
              </div>
            </div>

            <div id='portfolioBoxes'>
              <div className='image'>
              <img src={portfolioCurrent} className='portfolioImages' />
                <div className='portfolioBoxesOverlay' style={{bottom:"1px"}}>
                <h2>Portfolio</h2>
                <p>-Portfolio site made using React</p>
                <p>-Utilised React hooks such as useEffect, useState and useRef </p>
                <p>-When all form fields are satisfied, Email.js was used to send contact message from user</p>
                <p>-Used class based components to dynamically change Navbar upon scroll</p>
                <div className='overlayBtns'>
                <a href='https://github.com/bm298/Website' target="_blank"> <button className='liveCode'>Source Code</button> </a>
                <a href='https://bm298.github.io/Website/' target="_blank"> <button className='liveSite'>Live Site</button> </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

      </div>
      {/* End of About section */}


      {/* Contact Section   */}
        <div className='footerContainer' ref={contactSection}>

            <div className='contactTotal'>
                <h2 id='contactMeText'>Contact Me</h2>
            </div>


          <div className='formSocials'>

            <div className='socialsContainer'>
            <div className='socialsMax'>
              <h3>Contact Info</h3>
              <p  style={{color:"grey"}}>Open for work opportunities. Let's connect!</p>
              <div>
                <div className='info'>
                  <span><FaUserTie style={{fill:'green',fontSize:"2rem"}} /></span>
                  <div>
                    <p  style={{fontWeight:"600"}}>Name</p>
                    <p style={{fontWeight:"300", color:'grey'}}>Bilal Musa</p>
                  </div>
                </div>
                <div className='info'>
                  <span><ImLocation2 style={{fill:'green',fontSize:"2rem"}} /></span>
                  <div>
                    <p style={{fontWeight:"600"}}>Location</p>
                    <p style={{fontWeight:"300", color:'grey'}}>Lancashire, UK</p>
                  </div>
                </div>
              </div>
              </div>


            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className='footer'>

                  <div className='eachContactBoxName'>
                    <p className='formErrors' >{formErrors.name}</p>
                    <input type="name" name="name" placeholder='Your Name' className='InputName' onChange={handleChange} value={formData.name}>
                    </input>
                  </div>

                  <div className='eachContactBoxEmail'>
                    <p className='formErrors'>{formErrors.user_email}</p>
                    <input type="email" name="user_email" placeholder='Your Email' className='InputEmail' onChange={handleChange} value={formData.user_email}>
                    </input>
                  </div>

                  <div className='eachContactBoxSubject'>
                    <p className='formErrors'>{formErrors.subject}</p>
                    <input type="subject" name='subject' placeholder='Subject' className='InputSubject' onChange={handleChange} value={formData.subject}>
                    </input>
                  </div>

                  <div className='eachContactBoxText'>
                    <p className="formErrors" >{formErrors.message}</p>
                    <textarea placeholder='Message' name="message" onChange={handleChange} value={formData.message}>
                    </textarea>
                  </div>
                </div>
                <button className='sendBtn' type='submit' value="send">Send</button>

                {Object.keys(formErrors).length === 0 && isSubmit ? <p>Message Sent</p> : "" }

            </form>
          </div>

        {/* Footer Icons*/}
          <div className='icons'>
            <div id='iconsSpace'></div>
            <a><FaGithub id='iconsSpace' className='iconsFill' /></a>
            <a><FaLinkedin id='iconsSpace' className='iconsFill'/></a>
            <a><FaTwitter id='iconsSpace' className='iconsFill'/></a>
            <div id='iconsSpace'></div>
          </div>
          
          <div style={{fontSize:"0.8rem"}}>
            <p>Site developed by Bilal Musa </p>
            <p>Copyright © 2023</p>
          </div>

        </div>

    </div>
      {/* END OF CONTAINER */}

    </div>
  );
}

export default App;
