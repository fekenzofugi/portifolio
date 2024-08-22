import React from 'react'
import styled from 'styled-components';
import links from '../../utils/projectLinks';
import Project from './Project';

const ProjectPosts = () => {
  return (
    <Wrapper>
        {links.map(post => {
          return <Project key={post} count = {post.count} title ={post.title} subHeader = {post.subHeader} tags = {post.tags} date = {post.github} img = {post.img}/>
        })}
    </Wrapper>
  )
}

export default ProjectPosts;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
  margin: 5rem 0;
  min-height: 100vh !important;
`;
