import React from 'react'
import styled from 'styled-components';
import BlogPost from './BlogPost';
import links from '../../utils/postsLinks';

const BlogPosts = () => {
  return (
    <Wrapper>
        {links.map(post => {
          return <BlogPost key={post} count = {post.count} title ={post.title} subHeader = {post.subHeader} tags = {post.tags} date = {post.date} img = {post.img}/>
        })}
    </Wrapper>
  )
}

export default BlogPosts;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 3rem;

`;