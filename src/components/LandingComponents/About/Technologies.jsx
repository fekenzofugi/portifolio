import styled from "styled-components";

const Technologies = () => {
    return (
        <Wrapper>
            <h4>Technologies</h4> 
            <br/>
            <hr/>
            <h5>Programming Languages</h5>
            <ol>
              <li>Java</li>
              <li>JavaScript</li>
            </ol>
            <h5>Others</h5>
            <ol>
              <li>Docker</li>
              <li>PostgreSQL</li>
              <li>Nginx</li>
              <li>Redis</li>
              <li>Sidekiq</li>
              <li>AWS</li>
            </ol>
          <br/>
          <p>NOTE: I am not an expert in any of these technologies. 
        I've just listed the ones that i have some experience working with.</p>
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
