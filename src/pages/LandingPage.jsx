import styled from "styled-components";
import { WorkSection, Experience, About, Contact } from "../components/LandingComponents";
import {useInView} from "react-intersection-observer";
import LandingLinks from "../components/Navbar/LandingLinks";
import { useState } from "react";
import { useEffect } from "react";
import {BiNavigation} from "react-icons/bi"
import ModernSidebar from "../components/Navbar/ModernSidebar";

const LandingPage = () => {

    const {ref: h1Ref, inView: h1IsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const [showLittleNav, setShowLittleNav] = useState(false);

    const toggleLittleNav = () => {
        setShowLittleNav(!showLittleNav);
    };
    
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.transform = `scale(${scroll}, 1)`;
      progressBar.style.opacity = `${scroll}`;
    };


    useEffect(() => {
        window.addEventListener("scroll", progressBarHandler);
    }, [])

    return (
        <Wrapper>
            <div id="progress-bar-container">
                <div id="progress-bar"></div>
            </div>

            <ModernSidebar/>
            <BiNavigation onClick={toggleLittleNav} className={`${showLittleNav ? "nav-btn active" : "nav-btn"}`}/>
            
            <LandingLinks showLittleNav={showLittleNav} onClick={toggleLittleNav}/>
            <div id="home" className="home">
                <div className="first-page">
                    <h1 ref={h1Ref} className={`${h1IsVisible ? "animate-name" : "hide"}`}>Kenzo Fugi</h1>
                    <p ref={pRef} className={`${pIsVisible ? "animate-name" : "hide"}`}>
                      A software developer that builds web applications.
                    </p>
                </div>
                <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="var(--background-color)" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <WorkSection/>
            <About/>
            <Contact/>
        </Wrapper>
    );
};

export default LandingPage;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  .nav-btn {
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 2.5rem;
    cursor: pointer;
    transform: scale(1);
    z-index: 100;
    transition: 0.5s;
  }
  h1 {
    font-family: "Montserrat"
  }
  .nav-btn.active {
    opacity: 0;
    transform: scale(0);
  }


  .nav-btn:hover {
    transform: rotate(46deg);
  }


  @media (max-width: 700px) {
    .left-container-arrow1 {
      justify-content: start;
    }
  }

  @keyframes pump {
    0% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translate(3px);
    }
  }

  @keyframes super-pump {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }


    #progress-bar-container {
        position: fixed;
        z-index: 100;
        background-color: white;
        width: 100%;
        top: 0;
        left: 0;
        box-shadow: var(--shadow-1)
    }
    #progress-bar {
        background-color: black;
        transform-origin: top left;
        transform: scale(0,0);
        opacity: 0;
        width: 100%;
    }
    #progress-bar-container,
    #progress-bar {
        height: 2px;
    }

    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        position: relative;
        background-color: var(--background-secondary-color); 
        flex-direction: column
    }

    .wave {
      display: block;
      margin: 0;
      position: absolute;
      bottom: 0;
    }

    /* .home::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-500);
      border-radius: 0 0 40% 40%
    } */

    .first-page

    h1 {
        display: flex;
        justify-content: center;
        padding: 4px;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    p {
        margin-top: 0.2rem;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 1rem 0 0;
        text-align: center;
    }

    .hide {
        visibility: hidden;
        opacity: 0;
    }

    .animate {
        animation: left-to-right 0.5s forwards 0.5s;
        transform: scaleX(0);
        transform-origin: left;
    }

    .animate::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--text-color);
        animation: right-to-left 0.5s forwards 1s;
        transform: scaleX(1);
        transform-origin: right;
    }

    @keyframes left-to-right {
        100% {
            transform: scaleX(1);
        }

    }

    @keyframes right-to-left {
        100% {
            transform: scaleX(0);
        }
    }

    .animate-name {
      animation: small-to-big 1s forwards;
      transform-origin: bottom;
      opacity: 0;
    }

    @keyframes small-to-big {
      0% {

      }
      100% {
        opacity: 1;
      }
    }

    .logo {
      position: fixed;
      font-size: 2em;
      top: 0.9rem;
      left: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      z-index: 5;
    }

    .animate2{
      visibility: visible;
      opacity: 1;
    }

`;
