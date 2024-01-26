import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { HomeLayout, LandingPage, Blog, BlogPostPage } from "./pages";
import BlogPost from "./components/BlogComponents/BlogPost";
import BlogPosts from "./components/BlogComponents/BlogPosts";

const router = createBrowserRouter([
  {
    path: "/",
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
