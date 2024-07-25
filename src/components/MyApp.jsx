import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TestRedux from "./TestRedux/TestRedux";
import AddPostForm from "./CreatePost/AddPostForm";
import ReadPost from "./CreatePost/ReadPost";
import UpdatePost from "./CreatePost/UpdatePost";
import Home from "./Home/Home";
import SearchProfile from "./SearchProfile/SearchProfile";
import Footer from "./Footer/Footer";
import MyNavbar from "./Header/MyNavbar";

const MyApp = () => {
  const route = createBrowserRouter([
    {
      path: "/addPost",
      element: (
        <>
          <MyNavbar />
          <AddPostForm />
          <Footer />
        </>
      ),
    },
    {
      path: "/readPost",
      element: (
        <>
          <MyNavbar />
          <ReadPost />
          <Footer />
        </>
      ),
    },
    {
      path: "/updatePost",
      element: (
        <>
          <MyNavbar />
          <UpdatePost />
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <MyNavbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/searchProfile",
      element: (
        <>
          <MyNavbar />
          <SearchProfile />
          <Footer />
        </>
      ),
    },

    {
      path: "/testRedux",
      element: <TestRedux />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default MyApp;
