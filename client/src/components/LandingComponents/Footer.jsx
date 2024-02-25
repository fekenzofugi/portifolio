import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <p>&copy;2023-2024 Fernando Fugihara.</p>
        <p>All Rights Reserved.</p>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: black;
  .content {
    color: var(--white);
    display: flex;
    flex-direction: column;
    height: 5rem;
    justify-content: center;
    align-items: center;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: .5rem;
    }
  }

`

export default Footer