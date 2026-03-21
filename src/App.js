import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Admin/AdminLayout";
import Spinner from "./Frontend/Container/Spinner";
import Layout from "./Frontend/Layout";
import { useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  const { fontSize } = useSelector((state) => state.homeSlice);
  return (
    <div className="ACL_App" style={{ fontSize: `${fontSize}px` }}>
       <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
      />
      <Routes>
        <Route path="/*" element={<Layout />}></Route>
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={<Spinner />}>
              <AdminLayout />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
