import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentLayout from "./Layout/StudentLayout";
import ApplyPage from './Pages/ApplyPage'
import ErrorPage from './Pages/ErrorPage'
import LoginPage from "./Pages/LoginPage";
import dashboard from "./Pages/student/dashboard";
import ActivityPage from "./Pages/student/activityPage"
import EssayPage from "./Pages/student/essaysPage";
import FinancialAidPage from "./Pages/student/FinancialAidPage"
import Interview from "./Pages/student/Interview";
import Recommendation from "./Pages/student/Recommendation";
import Review from "./Pages/student/Review";



function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/apply" element={<ApplyPage />} />
         <Route path="*" element={<ErrorPage />} />
         <Route  element={<StudentLayout />}>
            <Route path="/dashboard" element={<dashboard />} />
            <Route path="activities" element={<ActivityPage />} />
            <Route path="essays" element={<EssayPage />} />
            <Route path="aid" element={<FinancialAidPage />} />
            <Route path="Interview" element={<Interview />} />
            <Route path="Recommendation" element={<Recommendation />} />
            <Route path="Reviews" element={<Review />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
