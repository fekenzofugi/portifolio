import styled from "styled-components";
import links from "../../utils/landingLinks"
import { IoIosCloseCircleOutline } from "react-icons/io";

const LandingLinks = ({onClick, showLittleNav}) => {
  return ( 
    <Wrapper>
        <div className={`${showLittleNav ? "overlay black" : "overlay"}`}>
          <div className={`${showLittleNav ? "content active" : "content"}`}>
          <IoIosCloseCircleOutline onClick={onClick} className={`${showLittleNav ? "icon active" : "icon"}`}/>
          {links.map((link) => {
                const {text, path} = link;
                return <a onClick={onClick} className="nav-link" href={`#${path}`} key={text}>{text}</a>
            })}
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    position: fixed;
    display: inline-block;
    z-index: 2;
        .overlay.black {
          background-color: rgba(0, 0, 0, 0.6);
          width: 100vw;
          height: 100vh;
          }

          .icon {
          position: absolute;
          top: 1rem;
          font-size: 3rem;
          z-index: 10000;
          right: 1rem;
          transition: 0.9s ease-in-out;
          opacity: 0;
          cursor: pointer;
        }

        .icon.active {
          opacity: 1;
        }
        .content {
          z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        flex-direction: column;
        gap: 2rem;
        height: 100vh;
        width: 50vw;
        transition: 0.7s;
        transform: translateY(-100%);
        background-color: var(--background-color);
      }
      .content.active {
        transform: translateY(0);
      }      
    
    .nav-link {
      text-transform: capitalize;
      color: var(--text-color);
      transition: var(--transition);
      font-size: 2rem;
      display: inline;
    }

    .nav-link::after {
      content: "";
      width: 100%;
      height: 2px;
      color: red;
      position: absolute;
      top: 19rem;
      z-index: 10;
    }

    .nav-link:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }

    @media (max-width: 700px) {
      .content {
        justify-content: start;
        padding-top: 6rem;
      }
      .nav-link {
        font-size: 1.2rem;
      }
    }
`;

export default LandingLinks;