import { useEffect, useState } from 'react'
import './App.css'
import minusIcon from "/assets/images/icon-minus.svg"
import plusIcon from "/assets/images/icon-plus.svg"
import starIcon from "/assets/images/icon-star.svg"
import bkdDesktop from "/assets/images/background-pattern-desktop.svg"
import bkdMobile from "/assets/images/background-pattern-mobile.svg"

function App() {
 const accordionObj = {
  first: false,
  second: false,
  third: false,
  fourth: false
 }
const [isopen, setIsopen] = useState(accordionObj)
const [activeIndex, setActiveindex] = useState(0)

function handleClick(index){
  if(index === 1){
    setIsopen((prevbool) => {
      return {
          ...prevbool, first: !isopen.first
      }
    })
  }else if(index === 2){
    setIsopen((prevbool) => {
      return {
          ...prevbool, second: !isopen.second
      }
    })
    
  }else if(index === 3){
    setIsopen((prevbool) => {
      return {
          ...prevbool, third: !isopen.third
      }
    })
    
  }else if(index === 4){
    setIsopen((prevbool) => {
      return {
          ...prevbool, fourth: !isopen.fourth
      }
    })
    
  }else{
    setIsopen((prevbool) => {
      return {
          ...prevbool
      }
    })
    
  }
}


  return (
    <div className="container">
      <div>
        <picture>
        <source media="(min-width: 450px)" srcset={bkdDesktop} />
        <img src={bkdMobile} alt="mobile-background" />
        </picture>
      </div>
      <div className='info__container'>
        <div className="info__wrapper">
          <div className="info__title">
            <img src={starIcon} alt="staricon"/>
            <h1>FAQS</h1>
          </div>
          <div className="accordion">
              <div><h3 onClick={() => handleClick(1) }>What is Frontend Mentor, and how will it help me?</h3><img onClick={() => handleClick(1) }   src={isopen.first ? minusIcon : plusIcon} alt="open-close" /></div>
              <p className={isopen.first ? "show" : "hide"}>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It is suitable for all levels and ideal for portfolio building.</p>
          </div>
          <div className="accordion">
              <div><h3 onClick={() => {handleClick(2)} }>Is Frontend Mentor Free?</h3><img onClick={() => {handleClick(2)} } src={isopen.second ? minusIcon : plusIcon} alt="open-close" /></div>
              <p className={isopen.second ? "show" : "hide"}>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels</p>
          </div>
          <div className="accordion">
              <div><h3 onClick={() => handleClick(3) }>Can I use Frontend Mentor projects in my portfolio?</h3><img onClick={() => handleClick(3) } src={isopen.third ? minusIcon : plusIcon} alt="open-close" /></div>
              <p className={isopen.third ? "show" : "hide"}>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
          </div>
          <div className="accordion">
              <div><h3 onClick={() => handleClick(4) }> How can I get help if I'm stuck on a Frontend Mentor challenge?</h3><img onClick={() => handleClick(4) } src={isopen.fourth ? minusIcon : plusIcon} alt="open-close" /></div>
              <p className={isopen.fourth ? "show" : "hide"}>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default App
