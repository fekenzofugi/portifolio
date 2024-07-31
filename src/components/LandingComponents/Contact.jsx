import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import {AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin} from "react-icons/ai"
import { useState } from "react";
import {AiFillGithub} from "react-icons/ai";
import Language from "../UI/Language";

const Contact = () => {
    const {ref: h1Ref, inView: h1IsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const {ref: iconsRef, inView: iconsIsVisible} = useInView();
    const {ref: barRef, inView: barIsVisible}  = useInView();

    const [sendEmail, setSendEmail] = useState(false);

    return(
        <Wrapper id="contact">
            <div className="content">
                <header ref={barRef} className={`${barIsVisible ? "grow" : "hide"}`}>
                    <h1 ref={h1Ref} className={`${h1IsVisible ? " animated" : "hide"}`}>Contact</h1>
                </header>
                <div className="form">
                    <div className="form-row">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" placeholder="Your Name" className="form-input" required/>                        
                    </div>
                    <div className="form-row">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" id="email" placeholder="Your E-mail" className="form-input" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" id="phone" placeholder="Phone number" className="form-input" required />                        
                    </div>

                    <textarea className="form-textarea" name="" id="message" cols="30" rows="10" placeholder="How can we help you?"></textarea>
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
                <div ref={iconsRef} className={`${iconsIsVisible ? "icons animate" : "icons hide"}`}>
                    <AiOutlineMail className="social-media email"/>
                    <a href="https://github.com/fernandofugihara" target="_blank">
                        <AiFillGithub className="social-media"/>
                    </a>
                    <a href="https://www.linkedin.com/in/fernandofugihara/" target="_blank">
                        <AiFillLinkedin className="social-media linkedin"/>
                    </a>
                </div>
            </div>

        </Wrapper>
    )
};

const Wrapper = styled.section`
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    padding-top: 2rem;
    margin-bottom: 1rem;
    .content {
        display: flex;
        flex-direction: column;
        position: relative;

    }
    p {
        margin-top: 1rem;
    }
    header h1 {
        z-index: 1;
        background-color: var(--background-color);
        padding: 0 1rem;
    }

    header h1.animated {
        animation: drop 1.1s forwards;
    } 

    @keyframes drop {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    header {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }
    header.grow::before {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        left: 0;
        z-index: -1;
        animation: grow-bar 1s 0.8s forwards;
        transform-origin: left;
        opacity: 0;
    }
    header.grow::after {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        right: 0;
        z-index: -1;
        animation: grow-bar 1.1s 0.8s forwards;
        transform-origin: right;
        opacity: 0;
    }

    .btn {
        font-family: "Montserrat" ;
    }

    @keyframes grow-bar {
        0% {
            opacity: 1;
            transform: scaleX(0);
        }
        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    }
    .icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 2rem;
    }
    .social-media {
        color: var(--text-color);
        font-size: 4rem;
        transition: transform 1s;
        cursor: pointer;
        z-index: 10000;
    }

    .social-media:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    button {
        margin-top: 1rem;
        background-color: var(--black);
        color: var(--white);
        cursor: pointer;
        font-weight: 400;
        text-transform: uppercase;
    }
    
    @media (max-width: 700px) {
    }

`;



export default Contact;
