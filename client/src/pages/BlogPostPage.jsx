import React from 'react'
import styled from 'styled-components'
import links from '../utils/postsLinks'
import { useParams } from 'react-router-dom'

const BlogPostPage = () => {
  const params = useParams();
  const paramsId = params.id;
  
  const post = links.find(post => post.title == paramsId)

  return (
    <Wrapper>
      <div className="content">
        <header>
          <h2>
            #{post.count} - {post.title}
          </h2>
          <h5>
            {post.date}
          </h5>
        </header>
        <div className="body" dangerouslySetInnerHTML={{__html: post.postBody}}>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 3rem 2rem;
  h2 {
    font-weight: 800;
    font-size: 3rem;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    max-width: 500px;
  }
  .content {
    max-width: 1000px;
  }
  .body {
    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-family: 'Courier New', Courier, monospace;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1rem;
    }
  }
`

export default BlogPostPage