import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import sfugies from "../../../assets/images/sfugies.png";
import forAny1 from "../../../assets/images/4any1.png";
import jobify from "../../../assets/images/jobify.png";
import restaurant from "../../../assets/images/restaurant.png";
import vinho from "../../../assets/images/vinho.png";
import mvm from "../../../assets/images/mvm.png";
import empty from "../../../assets/images/empty.jpg"
import negocia from "../../../assets/images/negocia.png"
import marketmood from "../../../assets/images/mood.png"

const Work = ({name, description, link, source}) => {

const {ref: workRef, inView: isWorkVisible } = useInView();


  return (
    <Wrapper ref={workRef} className={`${isWorkVisible ? "animate" : "hide"}`}>
        <div className="content">
            <h5>{name}</h5>
            <div className="image-div">
                {name === "4any1 Assessoria de Corrida" && <a target="_blank" href={link}><img src={forAny1} className="img" alt="" /></a>}
                {name === "Sfugies" && <a target="_blank" href={link}><img src={sfugies} className="img" alt="" /></a>}
                {name === "d'heaven" && <a target="_blank" href={link}><img src={restaurant} className="img" alt="" /></a>}
                {name === "Mil Vezes Mãe" && <a target="_blank" href={link}><img src={mvm} className="img" alt="" /></a>}
                {name === "Classe do Vinho" && <a target="_blank" href={link}><img src={vinho} className="img" alt="" /></a>}
                {name === "Negocia Tudo" && <a target="_blank" href={link}><img src={negocia} className="img" alt="" /></a>}
                {name === "Market Mood" && <a target="_blank" href={link}><img src={marketmood} className="img rec" alt=""/> </a>}
                
                <p className="work-description">{description}</p>
                <div className="buttons">
                    <a className="link" target="_blank" href={link}>See Project</a>
                    {source != "" ? <a className="link link_sc" target="_blank" href={source}>Source Code</a> : <a className="link link_sc">Source not available</a>}
            
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: var(--background-color);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    .content {
        z-index: -5;
    }

    .rec {
      
    }
    h5 {
        padding: 1rem;
        text-align: center;
    }
    .work-description {
        position: absolute;
        top: 5rem;
        opacity: 0;
        transition-delay: 0.2s;
        transition: 0.3s ease-in-out;
        color: var(--background-secondary-color);
        display: flex;
        justify-content: center;
        padding: 0 1rem;
        text-align: justify;
    }

    .image-div {
        background-color: var(--text-color);
        z-index: -1;
        display: flex;
        justify-content: center;
    }

    .image-div:hover .work-description {
        opacity: 1;
    }

    .image-div:hover .img {
        opacity: 0;
    }

    .image-div:hover .link {
        opacity: 1;
    }
    .img {
        border: 2px solid black;
        transition: 0.3s ease-in-out;
        height: 100%;
    }
    .img:hover {
        opacity: 0;
    }

    .buttons {
        position: absolute;
        display: flex;
        width: 100%;
        gap: 1rem;
        padding: 0 1rem;
        bottom: 2rem;
    }
    .link{
        width: 60%;
        border: 1px solid var(--background-secondary-color);
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 1rem;
        background-color: var(--text-color);
        color: var(--background-secondary-color);
        z-index: 12;
        transition: 0.3s ease-in-out;
        opacity: 0;
        display: flex;
        justify-content: center;
    }

    .link:hover {
        background-color: var(--background-secondary-color);
        color:var(--text-color);
    }

    @media (max-width: 700px) {
        p {
            padding: 0 10px;
            text-align: justify;
            font-size: 1rem;
        }
    }
`

export default Work
