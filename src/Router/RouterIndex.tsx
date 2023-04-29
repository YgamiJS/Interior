import { IRoute } from "@/types/types";
import { lazy } from "react";
const Home = lazy(() =>
  import("@/Pages/Home/Home").then((module) => ({ default: module.Home }))
);
const Shop = lazy(() =>
  import("@/Pages/Shop/Shop").then((module) => ({ default: module.Shop }))
);
const ProductPage = lazy(() =>
  import("@/Pages/ProductPage/ProductPage").then((module) => ({
    default: module.ProductPage,
  }))
);
const Basket = lazy(() =>
  import("@/Pages/Basket/Basket").then((module) => ({ default: module.Basket }))
);
const ErrorPage = lazy(() =>
  import("@/Pages/Error/ErrorPage").then((module) => ({
    default: module.ErrorPage,
  }))
);
const Login = lazy(() =>
  import("@/Pages/Auth/Login/Login").then((module) => ({
    default: module.Login,
  }))
);
const SingIn = lazy(() =>
  import("@/Pages/Auth/SingIn/SingIn").then((module) => ({
    default: module.SingIn,
  }))
);

export const publicRoutes: IRoute[] = [
  {
    path: "/Interior/",
    element: <Home />,
  },
  {
    path: "/Interior/login",
    element: <Login />,
  },
  {
    path: "/Interior/singin",
    element: <SingIn />,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: "/Interior/shop",
    element: <Shop />,
  },
  {
    path: "/Interior/shop/:id",
    element: <ProductPage />,
  },
  {
    path: "/Interior/basket/",
    element: <Basket />,
  },
  {
    path: "/Interior/*",
    element: <ErrorPage />,
  },
];
