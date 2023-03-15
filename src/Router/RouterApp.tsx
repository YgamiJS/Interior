import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./RouterIndex";
import { Layout } from "@/Layout/Layout";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {[...publicRoutes, ...privateRoutes].map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};
