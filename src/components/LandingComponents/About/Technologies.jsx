import styled from "styled-components";

const Technologies = () => {
    return (
        <Wrapper>
            <h4>Technologies</h4> 
            <br/>
            <hr/>
            <h5>Programming Languages</h5>
            <ol>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Typescript</li>
            </ol>
          <br/>
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

export default Technologies;
