import './App.css';
import React, {useRef} from 'react';
import Typed from 'react-typed'
import heroSite from './heroSite.jpg'
import formProjectPic from './formProjectPic.jpg'
import inspiredAir from './inspiredAir.jpg'
import notesAppPic from './notesAppPic.jpg'
import SkillsProp from './skillsProp';
import AddSkills from './addSkills';
import {FaCircle} from 'react-icons/fa';
import {GiPlainSquare} from 'react-icons/gi';
import {IoTriangleSharp} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
import {HiOutlineMenu} from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import userEvent from '@testing-library/user-event';
import NavBar from './navBar';


function App() {

  const [isShown, setIsShown] = React.useState(false);
  const [isShown2, setIsShown2] = React.useState(false);
  const [isShown3, setIsShown3] = React.useState(false);

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

// SEND EMAIL FUNCTION

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

const form= useRef()

const [formErrors, setFormErrors] = React.useState([])
const [isSubmit, setIsSubmit] = React.useState(false)


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

console.log("email sent!")

  setFormData({
    name: "",
    user_email:"",
    subject: "",
    message: "",
  })

}

},[formErrors])


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

  const [openBurgMenu, setOpenBurgerMenu]= React.useState(false)

  return (
    <div>

<div className='navBar'>
           <div className='bm'><h3>BM</h3></div>
           <HiOutlineMenu className='hamburgerMenu' onClick={() => setOpenBurgerMenu(!openBurgMenu) } />
          <div>
            <div>
              <ul className='navBarItems'>
              <li><a onClick={goToAboutSection} className='eachNav'> About </a></li>
              <li><a onClick={goToTechStackSection} className='eachNav'> Skills </a></li>
              <li><a onClick={goToPortfolioSection} className='eachNav'> Portfolio </a></li>
              <li><a onClick={goToContactSection} className='eachNav'> Contact </a></li>
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


      <div className='container'>

      <div className='contentContainer'>
        <div className="content1">
          <h2>Hi! I'm <span id='heroName'>Bilal Musa</span><br/>
          A Frontend Web Developer
          </h2>
          <div>
          <a onClick={goToContactSection}>
            <button className='contactMeHero'>
                Contact Me
            </button>
          </a>
          </div>
        </div>
        <div className="content2">
          <img src={heroSite} className='heroSiteImg' />
        </div>
      </div>

        <div>
            <div className='aboutSquare' ref={aboutSection}>
              <IoTriangleSharp className='triangle' />
              <h2 id='aboutText'>About</h2>
            </div>
            <div>
              <div className='typed'>
               <Typed className='typedAbout'
                  strings={[
                    "Hi, My name is Bilal!"
                  ]}
                  typeSpeed={90}
                  backSpeed={50}
                  loop
                  />
              </div>
             <p id='aboutInfo'> I am a passionate front end web developer based in the UK,
             that's focused on creating high quality, eye-catching web applications,
             offering a seamless end user experience.</p>
            </div>
        </div>

    <div>
      <div className='skillsCircleTotal' ref={techStackSection}>
        <FaCircle className='faCircle'/>
        <h2 id='techStackText'>Skill Stack</h2>
      </div>
      <div className='totalSkills'>
        <div className='skills'>
            {eachSkill}
        </div>
      </div>
    </div>

        <div>
          <div className='portfolio' ref={portfolioSection}>
            <GiPlainSquare className='square'/>
            <h2 id='portfolioText'>Portfolio</h2>
          </div>

          <div className='eachProject'>

            <div id='portfolioBoxes'>
              <div className='image'
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              >
              <img src={notesAppPic} className='portfolioImages' />
                <div className={!isShown ? 'portfolioBoxesTitle' : 'portfolioBoxesTitleClear'}>
                  Dynamic Notes App
                </div>
              </div>
            </div>

            <div id='portfolioBoxes'>
              <div className='image'
              onMouseEnter={() => setIsShown2(true)}
              onMouseLeave={() => setIsShown2(false)}
              >
              <img src={formProjectPic} className='portfolioImages' />
                <div className={!isShown2 ? 'portfolioBoxesTitle' : 'portfolioBoxesTitleClear'}>
                  Sign Up
                </div>
              </div>
            </div>

            <div id='portfolioBoxes'>
              <div className='image'
              onMouseEnter={() => setIsShown3(true)}
              onMouseLeave={() => setIsShown3(false)}
              >
              <img src={inspiredAir} className='portfolioImages' />
                <div className= {!isShown3 ? 'portfolioBoxesTitle' : 'portfolioBoxesTitleClear'}>
                  Airbnb Inspired Site
                </div>
              </div>
            </div>

          </div>
        </div>

      {/* Contact Section   */}

        <div className='footerContainer' ref={contactSection}>

            <div className='skillsEnvelopeTotal'>
                <GrMail className='envelope'/>
                <h2 id='contactMeText'>Contact Me</h2>
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
                  {/* className={formErrors.message ? 'formErrorsTransparent' : "formErrors"} */}
                </div>
                <button className='sendBtn' type='submit' value="send">Send</button>
              {Object.keys(formErrors).length === 0 && isSubmit ?
              <p>Message Sent</p>:""
              }
              </form>

        </div>

    </div>
      {/* END OF CONTAINER */}




    </div>
  );
}

export default App;
