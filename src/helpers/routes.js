import { lazy } from "react";
import { Navigate } from 'react-router-dom'

const HomePage = lazy(() => import("../pages/Home"));
const Post = lazy(() => import("../pages/Post"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));
const AdminHomePage = lazy(() => import("../pages/admin/Home"));
const NewPost = lazy(() => import("../pages/admin/NewPost"));
const UpdatePost = lazy(() => import("../pages/admin/UpdatePost"));

export const publicRoutes = [
  {
    key: "p1",
    path: "/",
    element: <HomePage />,
    isPrivate: false,
    isAdmin: false,
  },
  {
    key: "p2",
    path: "/:id",
    element: <Post />,
    isPrivate: false,
    isAdmin: false,
  },
  {
    key: "p3",
    path: "*",
    element: <NotFoundPage />,
    isPrivate: false,
    isAdmin: false,
  },
];

export const adminRoutes = [
  {
    key: "a1",
    path: "/",
    element: <Navigate to="/admin" replace />,
    isPrivate: true,
    isAdmin: true,
  },
  {
    key: "a2",
    path: "/admin",
    element: <AdminHomePage />,
    isPrivate: true,
    isAdmin: true,
  },
  {
    key: "a3",
    path: "/admin/new-post",
    element: <NewPost />,
    isPrivate: true,
    isAdmin: true,
  },
  {
    key: "a4",
    path: "/admin/update-post/:id",
    element: <UpdatePost />,
    isPrivate: true,
    isAdmin: true,
  },
];
