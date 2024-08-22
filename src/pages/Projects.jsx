import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
    return (
        <Wrapper>
            <Outlet/> 
        </Wrapper>
    );
};

export default Projects;

const Wrapper = styled.div`
`;
