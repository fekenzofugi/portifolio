import styled from 'styled-components';
import Work from './Work';
import links from '../../../utils/worksLinks';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Works = () => {

    const {ref: h1Ref, inView: myElementIsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const {ref: barRef, inView: barIsVisible}  = useInView();

  return (
    <Wrapper>
        <header ref={barRef} className={`${barIsVisible ? "grow" : "hide"}`}>
            <h1 ref={h1Ref} className={`${myElementIsVisible ? "animate" : "hide"}`}>Projects</h1>       
        </header>
                        
        <div className="works">
            {links.map((work) => {
                const {name, description, link, source} = work;
                return (
                    <Work className="work" key={name} name={name} description={description} link={link} source={source}/>
                );
            })}

        </div>
        
        <Link to="projects" className="btn more">See More</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 1rem 3rem 1rem;
    text-align: center;
    .more {
        margin-top: 1rem;
        color: var(--font-color);
        background-color: var(--background-secondary-color)
    }
    header h1 {
        background-color: var(--background-color);
        z-index: 1;
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
    .works {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 1000px;
        gap: 2rem;
    }
    @media (max-width: 700px) {
        margin: 3.5rem 2rem 0;
        .works {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

`;

export default Works
