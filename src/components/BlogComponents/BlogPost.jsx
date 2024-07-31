import styled from "styled-components";
import ruby from "../../assets/images/ruby.png"
import { Link } from "react-router-dom";

const BlogPost = (props) => {

  return (
    <Wrapper>
      <Link to={`/blog/${props.title}`}>
        <div className="content">
          <header>
            <h4>#{props.count} - {props.title}</h4>
            <p>{props.subHeader}</p>
            <p>{props.date}</p>
              <div className="tags">
              {props.tags.map(tag => {
                return <Link key={tag} to={`/blog/{tag}`} className="tag">{tag}</Link>
              })}
            </div>
          </header>
          <div className="body">
          </div>
        </div>
      </Link>
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
    width: 700px;
    height: 14rem;
    background-color: var(--background-secondary-color);
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0;
  }
  header {
    width: 100%;
    padding: 0 1rem 1rem;
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
  
  @media (max-width: 800px) {
    .content {
      width: 300px;
    }
  }

`