import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));
const AdminHomePage = lazy(() => import("../pages/admin/Home"));

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
    path: "*",
    element: <NotFoundPage />,
    isPrivate: false,
    isAdmin: false,
  },
];

export const adminRoutes = [
  {
    key: "a1",
    path: "/admin",
    element: <AdminHomePage />,
    isPrivate: true,
    isAdmin: true,
  },
];
