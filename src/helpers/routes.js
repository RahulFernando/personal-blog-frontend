import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));
const NotFoundPage = lazy(() => import("../pages/notFound/NotFound"));

export const publicRoutes = [
  { key: "p1", path: "/", element: <HomePage /> },
  { key: "p2", path: "*", element: <NotFoundPage /> },
];
