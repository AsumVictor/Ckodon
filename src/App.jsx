import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentLayout from "./Layout/StudentLayout";
import ApplyPage from "./Pages/ApplyPage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/student/dashboard";
import ActivityPage from "./Pages/student/activity/activityPage";
import EssayPage from "./Pages/student/essaysPage";
import FinancialAidPage from "./Pages/student/FinancialAidPage";
import Interview from "./Pages/student/Interview";
import Recommendation from "./Pages/student/Recommendation";
import Review from "./Pages/student/Review";
import ActivityLayout from "./Layout/student/ActivityLayout";
import Construction from "./Pages/Construction";
import ActivityTips from './Pages/student/activity/ActivityTips'
import ActivityList from "./Pages/student/activity/activityPage";
import ActivityOverview from "./Pages/student/activity/ActivityOverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<Construction />} />
          <Route path="activities" element={<ActivityLayout />}>
             <Route index element={<ActivityOverview/>} />
             <Route path="Tips" element={<ActivityTips />} />
             <Route path="Honor-and-Activity" element={<ActivityPage />} />
          </Route>    
          <Route path="essays" element={<Construction />} />
          <Route path="aid" element={<Construction />} />
          <Route path="Interview" element={<Construction />} />
          <Route path="Recommendation" element={<Construction />} />
          <Route path="Reviews" element={<Construction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
