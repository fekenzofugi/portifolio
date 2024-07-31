import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import circles from "../../assets/images/circles.svg";

const Loading = ({classes}) => {


    return (
        <Wrapper>
            <div className={`loading-container ${classes}`}>
<svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="var(--text-color)">
    <circle cx="15" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fillOpacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
        <animate attributeName="r" from="9" to="9"
                 begin="0s" dur="0.8s"
                 values="9;15;9" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fillOpacity" from="0.5" to="0.5"
                 begin="0s" dur="0.8s"
                 values=".5;1;.5" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="105" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fillOpacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
</svg>

            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    .loading-container {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: var(--background-secondary-color);
        z-index: 100000000;
        transition: 2.2s;
    }
    .loading-container.hide {
        transform: translateY(-100rem);
    }

    .loading-container svg {
        transition: 0.3s;
    }

    .loading-container.hide svg {
        opacity: 0;
    }

    @keyframes loading {
        0% {
            transform: scale(7);
        }
        100% {
            transform: scale(2);
        }
    }
`;

export default Loading;

