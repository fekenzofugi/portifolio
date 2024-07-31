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
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 4rem 3rem 2rem;
  h2 {
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  pre {
    display: flex;
    flex-wrap: wrap;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .content {
    position: relative;
    max-width: 1000px;
  }
  .body {
    p {
      overflow-wrap: break-word;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      line-height: 1.4;
      font-weight: 800;
      font-family: 'Courier New', Courier, monospace;
      text-transform: none;
    }

    pre {
      background-color: var(--background-secondary-color);
      border: 1px solid var(--text-color);
      padding: 1rem;
      font-size: 1.2rem;
      text-transform: none;
      word-wrap: break-word;
      overflow-x: auto;
    }
    
    b {
      color: red;
    }

    ol {
      list-style: decimal !important;
    }

    ol, ul {
      position: relative;
      font-family: 'Courier New', Courier, monospace;
      font-weight: 800;
      list-style: disc;
      overflow-wrap: break-word;
      width: 100%;
      li {
        font-size: 1.2rem;
        position: relative;
        width: 100%;
      }
    }

    h4 {
      font-size: 2.5rem;
    }
    h5 {
      font-size: 2rem;
    }
    
    p, h4, h5, pre, ul, ol {
      color: var(--text-color);
      margin-bottom: 1rem;
      display: block;
    }
  }

  table {
  font-family: 'Courier New', Courier, monospace;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
}

table td, table th {
  font-weight: 800;
  border: 1px solid var(--text-color);
  padding: 8px;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
}

a {
  color :red;
}

  @media (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.9rem !important;
    }
    h5 {
      font-size: 1.5rem !important;
    }
    .content {
      width: 17rem;
    }

  }

  @media (max-width: 350px) {
    .content {
      width: 15rem;
    }
  }
`

export default BlogPostPage
