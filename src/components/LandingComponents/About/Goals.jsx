import styled from "styled-components";

const Goals = () => {
    return (
        <Wrapper>
            <h4>Professional Goals</h4>
            <ol>
                <li>  
                  Work for something great 
                </li>
            </ol>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h4{
        margin-top: 1rem;
        font-weight: 500;
    }
    ol{
        list-style: disc;
    }
    li {
        margin-top: 1rem;
        font-size: 14px;
    }
`;

export default Goals;
