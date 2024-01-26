import styled from "styled-components";
import ruby from "../../assets/images/ruby.png"
import { Link } from "react-router-dom";

const BlogPost = (props) => {

  return (
    <Wrapper>
      <a href={`/blog/${props.title}`}>
        <div className="content">

          <img className="img" src={ruby} alt="" />
          <header>
            <h4>#{props.count} - {props.title}</h4>
            <p>{props.subHeader}</p>
              <div className="tags">
              {props.tags.map(tag => {
                return <Link key={tag} to={`/blog/{tag}`} className="tag">{tag}</Link>
              })}
            </div>
          </header>
          <div className="body">
          </div>
        </div>
      </a>
    </Wrapper>
  )
}

export default BlogPost;

const Wrapper = styled.div`
  a {
    transition: 0.3s;
    color: var(--font-color)
  }
  a:hover .content {
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  .content {
    transition: .3s;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    max-width: 1200px;
    background-color: var(--background-secondary-color);
    justify-content: center;
    align-items: center;
  }
  header {
    padding: 1rem 2rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h4 {
    font-weight: 800;
  }
  img {
    max-height: 10rem;
    max-width: 500px;
  }
  .tags {
    display: flex;
    gap: 1rem;
  }
  .tag {
    border-radius: 1rem;
    color: white;
    padding: 5px 10px;
    background-color: #b81212;
    border: 1px solid black;
    font-size: var(--font-size);
    z-index: 10;
    cursor: pointer;
  }
  .tag:hover {
    transform: scale(1.04);
  }
  

`