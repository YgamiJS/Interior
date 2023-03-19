import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./RouterIndex";
import { Layout } from "@/Layout/Layout";
import { ErrorPage } from "@/Pages/Error/ErrorPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        {[...publicRoutes, ...privateRoutes].map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};
