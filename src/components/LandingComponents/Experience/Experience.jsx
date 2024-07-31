import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import circle from "../../../assets/images/circle.png";

const Experience = () => {
    const {ref: h1Ref, inView: h1IsVisible} = useInView();
    const {ref: pRef, inView: pIsVisible} = useInView();
    const {ref: timelineRef, inView: timelineIsVisible} = useInView();

    return(
        <Wrapper id="experience">

            <header>
                <h1 ref={h1Ref} className={`${h1IsVisible ? "animate" : "hide"}`}>Experience</h1>
            </header>

            <div ref={timelineRef} className={`${timelineIsVisible ? "timeline" : "hide"}`}>
                <div className="container1 left-container">
                    <img src={circle} alt="" />
                    <div className="text-box">
                        <h2>Freelancer Web Dev</h2>
                        <small>dez 2022-today</small>
                        <ol>
                            <li>Website Themes</li>
                            <li>E-commerce Websites</li>
                            <li>Landing Pages</li>
                        </ol>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container1 right-container">
                    <img src={circle} alt="" />
                    <div className="text-box">
                        <h2></h2>
                        <small></small>
                        <ol className="list">
                            <li></li>
                            <li></li>
                        </ol>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Experience;

const Wrapper = styled.section`
    padding-top: 2rem;
    header {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        width: fit-content;
    }
    p {
        width: fit-content;
    }

    .timeline {
        position: relative;
        margin: 100px auto;
        max-width: 1200px;
    }
    .container1 {
        padding: 10px 50px;
        position: relative;
        width: 50%;
        animation: movedown 2s linear forwards ;
        opacity: 0;
    }
    .container1:nth-child(1) {
        animation-delay: 1s;
    }
    .container1:nth-child(2) {
        animation-delay: 2s;
    }
    .container1:nth-child(3) {
        animation-delay: 3s;
    }
    .container1:nth-child(4) {
        animation-delay: 4s;
    }
    .container1:nth-child(5) {
        animation-delay: 5s;
    }
    .container1:nth-child(6) {
        animation-delay: 6s;
    }
    @keyframes movedown {
        0% {
            opacity: 0;
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }   
    }
    .text-box {
        padding: 20px 30px;
        background-color: var(--background-secondary-color);
        position: relative;
        border-radius: 6px;
        font-size: 15px;
        box-shadow: var(--shadow-3);
    }

    .text-box h2 {
        font-weight: 200 !important;
    }

    .text-box ol {
        list-style: disc;
    }

    li {
        font-size: 20px;
        margin-top: 1rem;
    }

    .left-container {
        left: 0;
    }
    .right-container {
        left: 50%;
    }
    .container1 img {
        position: absolute;
        width: 40px;
        border-radius: 50%;
        right: -20px;
        top: 32px;
        z-index: 10;
    }
    .right-container img {
        left: -20px;
    }
    .timeline::after {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background-color: var(--text-color);
        top: 0;
        left: 50%;
        margin-left: -3px;
        z-index: -1;
        animation: moveline 2s linear forwards;
    }
    @keyframes moveline {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }
    .text-box h2 {
        margin-bottom: 15px;
        font-weight: 600;
    }
    .text-box small {
        display: inline-block;
        margin-bottom: 10px;
    }
    .left-container-arrow {
        height: 0;
        width: 0;
        position: absolute;
        top: 28px;
        z-index: 1;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid var(--text-color);
        right: -15px;
    }
    .right-container-arrow {
        height: 0;
        width: 0;
        position: absolute;
        top: 28px;
        z-index: 1;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 15px solid var(--text-color);
        left: -15px;
    }



    @media screen and (max-width: 600px){
        .timeline {
            margin: 50px auto;
        }

        .timeline::after {
        left: 31px ;
        }

        .container1 {
            width: 100%;
            padding-left: 80px;
            padding-right: 25px;
        }
        .text-box {
            font-size: 13px;
        }
        .text-box small {
            margin-bottom: 10px;
        }
        .right-container {
            left: 0;
        }
        .left-container img, 
        .right-container img {
            left: 10px;
        }
        .left-container-arrow,
        .right-container-arrow {
            border-right: 15px solid var(--text-color);
            border-left: 0;
            left: -15px;
        }
    }   
`;
