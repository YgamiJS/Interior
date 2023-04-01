import React from "react";
import { IRoute } from "@/types/types";
import { Home } from "@/Pages/Home/Home";
import { Shop } from "@/Pages/Shop/Shop";
import { ProductPage } from "@/Pages/ProductPage/ProductPage";
import { Basket } from "@/Pages/Basket/Basket";
import { ErrorPage } from "@/Pages/Error/ErrorPage";
import { Login } from "@/Pages/Auth/Login/Login";
import { SingIn } from "@/Pages/Auth/SingIn/SingIn";

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
