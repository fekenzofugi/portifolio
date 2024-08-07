import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import { useUiContext } from "../../pages/HomeLayout";
import LandingLinks from "./LandingLinks";
import DarkThemeBtn from "./DarkThemeBtn";
import Language from "../UI/Language";

const Navbar = () => {

    const {toggleSidebar, showSidebar} = useUiContext();


    return (
        <Wrapper>
            <DarkThemeBtn/>
            <a target="_blank" className="github-link" href="https://github.com/fekenzofugi">
                <AiFillGithub/>
            </a>
            <button className={`${!showSidebar ? "nav-btn" : "nav-btn active"}`} onClick={toggleSidebar}>
            <svg stroke='var(--text-color)' fill='none' className='hamburguer' viewBox='-10 -10 120 120' width="60">
                <path
                    className='line'
                    d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin='round'
                >
                </path>
                <line 
                    className="line bottom"
                    x1="80" x2="20"
                    y1="20" y2="20"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="80"
                    strokeDashoffset="0"
                    >
                </line>
            </svg>
            </button>

        </Wrapper>
    )
};

export default Navbar;


const Wrapper = styled.nav`
    overflow: hidden;
    .github-link {
        position: fixed;
        top: 11px;
        font-size: 2.5rem;
        color: var(--text-color);
        right: 63px;
        transition: 1s;
        z-index: 100;
    }

    .nav-btn {
      border: transparent;
      background: transparent;
      cursor: pointer;
      position: fixed;
      right: 5px;
      top: 7px;
      z-index: 9999;
      overflow: hidden;
      --button-color: var(--text-color);
    }

    .nav-btn .hamburguer {
      transition: translate 1s, rotate 1s;
    }

    .nav-btn.active .hamburguer {
      translate: 10px -10px;
      rotate: .125turn
    }

    .nav-btn .line {
      transition: 1s;
      stroke-dasharray: 60 31.5 60 1000;
      transition: 1s;
    }

    .nav-btn.active .line {
      stroke-dasharray: 60 105 60 1000;
      stroke-dashoffset: -90;
    }

`
