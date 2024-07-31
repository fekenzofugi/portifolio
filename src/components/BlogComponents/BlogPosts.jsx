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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
  margin: 5rem 0;
  min-height: 100vh;
`;
