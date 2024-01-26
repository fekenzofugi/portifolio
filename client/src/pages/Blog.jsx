import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Blog = () => {
    return (
        <Wrapper>
            <Outlet/> 
        </Wrapper>
    );
};

export default Blog

const Wrapper = styled.div`

`;