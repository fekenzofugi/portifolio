import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import {useInView} from "react-intersection-observer";
import Works from "./Works";

const WorkSection = () => {

    // const h1Ref = useRef();
    // const [myElementIsVisible, setMyElementIsVisible] = useState();
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         setMyElementIsVisible(entry.isIntersecting)
    //     });
    //     observer.observe(h1Ref.current)
    // }, []);

    const {ref: h1Ref, inView: myElementIsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const {ref: progressBarRef, inView: progressIsVisible} = useInView();

    // let verticalProgressBarHandler = () => {
    //     const totalScroll = document.documentElement.scrollTop - 1000;
    //     const windowHeight = document.documentElement.clientHeight;
    //     const scroll = `${totalScroll / windowHeight}`;
    //     const verticalProgressBar = document.getElementById("vertical-progress-bar");
    //     verticalProgressBar.style.transform = `scale(1, ${scroll})`;
    //     verticalProgressBar.style.opacity = `${scroll}`;
    //   };
  
    //   useEffect(() => {
    //       window.addEventListener("scroll", verticalProgressBarHandler);
    //   }, [])

    return(
        <Wrapper id="work">
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="var(--background-secondary-color)" fill-opacity="1" d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <Works/>
        </Wrapper>    
    );
};

export default WorkSection;

const Wrapper = styled.section`
    padding-bottom: 25%;
    background-color: var(--background-color);
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    align-items: center;
    
    .wave {
        position: absolute;
        bottom: 0;
        display: block;
        margin: 0;
    }
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
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
    h1 {
        display: flex;
        position: relative;
        justify-content: center;
    }
    @media (max-width: 700px) {
        padding-bottom: 10rem;
        .content {
            
        }
    }
`;