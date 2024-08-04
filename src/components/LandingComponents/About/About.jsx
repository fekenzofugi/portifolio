import styled from "styled-components";
import avatar from "../../../assets/images/perfil.jpeg";
import Education from "./Education";
import Interests from "./Interests";
import Technologies from "./Technologies";
import Goals from "./Goals";
import { useInView } from "react-intersection-observer";

const About = () => {

    const {ref: h1Ref, inView: h1IsVisible}  = useInView();
    const {ref: barRef, inView: barIsVisible}  = useInView();

    return(
        <Wrapper id="about">
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="var(--background-color)" fill-opacity="1" d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="content">
                <header ref={barRef} className={`${barIsVisible ? "grow" : "hide"}`}>
                    <h1 ref={h1Ref} className={`${h1IsVisible ? " animat" : "hide"}`}>About me</h1>
                </header>
                <header className="content-header">
                    <div className="about-image">
                        <img src={avatar} className="img" alt="" />
                        <h5>Fernando Fugihara</h5>
                    </div>
                    <div className="description">
                        <p>
                            I'm currently studying electrical engineering at the 
                            <a target="_blank" className="link" href="https://www.unicamp.br/unicamp/"> University of Campinas </a>, and besides that i create websites.
                            Creating websites is more than a mere activity for me, it's a 
                            passion that allows me to breathe life into my ideas and share my 
                            knowledge in a visual and interactive way. 
                        </p>
                        <p>
                            In this moment, my interests are Deep Learning and Game development. Stay tune for the projects that will come!
                        </p>
                        <hr />
                        <div className="middle-section">
                            <Education/>
                            <Interests/>
                            <Technologies/>
                            <Goals/>
                        </div>
                    </div>    
                </header>

            </div>

        </Wrapper>
    )
};

const Wrapper = styled.section`
    background-color: var(--background-secondary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 25%;
    .wave {
      display: block;
      margin: 0;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 2rem;
        max-width: 1000px;
    }
    p {
      padding-top: 0;
      padding-bottom: 0;
    }
    header h1 {
        z-index: 1;
        background-color: var(--background-secondary-color);
        padding: 0 1rem;
    }
    header {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
    header.grow::before {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        left: 0;
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
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
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
        transform-origin: right;
        opacity: 0;
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

    .content-header {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 4rem;
        h5 {
            margin-top: 1rem;
        }
    }
    .pdf {
        margin-top: 1rem;
        border: 1px solid black;
        border-radius: 1rem;
        padding: 5px 10px;
        color: var(--text-color);
        background-color: var(--background-secondary-color);
    }
    .pdf:hover {
        background-color: var(--text-color);
        color: var(--background-secondary-color);
    }
    .description {
        margin-bottom: 0rem;
        .link {
            
            color: orangered;
        }
        p {
            text-align: start;
            display: inline-block;
            line-height: 1.5;
            margin-bottom: 1rem;
        }
    }
    .about-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    .img {
        width: 10rem;
        border-radius: 100%;
        border: 1px solid black;
        transition: 0.2s ease-in-out;
    }
    .img:hover {
        transform: scale(1.1);
    }
    .middle-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    .interests {
        margin-top: 1rem;

    }
    .education {
        margin-top: 1rem;
    }

    .container-h1 {
        position: relative;
    }
    .animat {
        animation: popUp cubic-bezier(0.645, 0.045, 0.355, 1) 1s;
    }

    @keyframes popUp {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @media (max-width: 700px) {
        padding: 0rem 1rem 1rem;
        .heading-description {
            justify-content: center;
        }
        .content-header {
            grid-template-columns: 1fr;
        }
        .middle-section {
        grid-template-columns: 1fr;
        }
        .description p{
            text-align: justify;
        }
    }
`;

export default About;
