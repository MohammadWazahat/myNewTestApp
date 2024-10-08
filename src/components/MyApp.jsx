import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddPostForm from "./CreatePost/AddPostForm";
import UpdatePost from "./CreatePost/UpdatePost";
import SearchProfile from "./SearchProfile/SearchProfile";
import Footer from "./Footer/Footer";
import MyNavbar from "./Header/MyNavbar";
import ViewSingleProfile from "./SearchProfile/ViewSingleProfile";
import MyFollowing from "./myProfile/MyFollowing";
import MyProfile from "./myProfile/MyProfile";
import ComTest from "./Home/ComTest";
import ComSingleTest from "./Home/ComSingleTest";

const MyApp = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <MyNavbar />
          <ComTest />
          <Footer />
        </>
      ),
    },
    {
      path: "/comTest/:id",
      element: (
        <>
          <MyNavbar />
          <ComSingleTest />
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
      path: "/viewSingleProfile/:id",
      element: (
        <>
          <MyNavbar />
          <ViewSingleProfile />
          <Footer />
        </>
      ),
    },
    {
      path: "/myProfile",
      element: (
        <>
          <MyNavbar />
          <MyProfile />
          <Footer />
        </>
      ),
    },
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
      path: "/updatePost/:id",
      element: (
        <>
          <MyNavbar />
          <UpdatePost />
          <Footer />
        </>
      ),
    },

    {
      path: "/myFollowing",
      element: (
        <>
          <MyNavbar />
          <MyFollowing />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default MyApp;
