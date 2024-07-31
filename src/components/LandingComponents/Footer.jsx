import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <p>&copy;2022-2024 Fernando Fugihara.</p>
        <p>All Rights Reserved.</p>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  background: var(--background-secondary-color);
  border-radius: 5rem 0;
  border: 1px solid var(--text-color);
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
      color: var(--text-color)
    }
  }

`

export default Footer
