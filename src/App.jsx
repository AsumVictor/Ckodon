import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentLayout from "./Layout/StudentLayout";
import ApplyPage from './Pages/ApplyPage'
import ErrorPage from './Pages/ErrorPage'
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/apply" element={<ApplyPage />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
