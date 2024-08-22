import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { HomeLayout, LandingPage, Blog, BlogPostPage } from "./pages";
import BlogPost from "./components/BlogComponents/BlogPost";
import BlogPosts from "./components/BlogComponents/BlogPosts";
import Projects from "./pages/Projects";
import Project from "./components/ProjectsComponents/Project";
import ProjectPosts from "./components/ProjectsComponents/ProjectPosts";

const router = createBrowserRouter([
  {
    path: "/portifolio",
    element: <HomeLayout/>,
    children:[
      {
        index: true,
        element: <LandingPage/>
      },
      {
        path: "blog",
        element: <Blog/>,
        children: [
          {
            index: true,
            element: <BlogPosts/>
          },
          {
            path: ":id",
            element: <BlogPostPage/> 
          }
        ]
      },
      {
        path: "projects",
        element: <Projects/>,
        children: [
          {
            index: true,
            element: <ProjectPosts/>
          }
        ]
      }
    ]
  }
])
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
