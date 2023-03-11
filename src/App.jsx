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
import EssaysLayout from "./Layout/student/essayLayout";
import RecomendationLayout from "./Layout/student/recommendation";
import FinancialAIdLayout from "./Layout/student/Aid";
import InterviewLayout from "./Layout/student/Interview";

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
             <Route path="Honor-and-Activity" element={<ActivityList />} />
          </Route>

          <Route path="Essays" element={<EssaysLayout />}>
             <Route index element={<Construction/>} />
             <Route path="Edit-Essays" element={<Construction />} />
          </Route>   

          <Route path="financial-aid" element={<FinancialAIdLayout />}>
             <Route index element={<Construction/>} />
             <Route path="edit-financial-documents" element={<Construction />} />
          </Route>

          <Route path="recommendation" element={<RecomendationLayout />}>
             <Route index element={<Construction/>} />
             <Route path="invite" element={<Construction />} />
          </Route>  

          <Route path="interview" element={<InterviewLayout />}>
             <Route index element={<Construction/>} />
          </Route> 

          <Route path="Reviews" element={<Construction />} />

          <Route path="notification" element={<ErrorPage />} />

          <Route path="chat" element={<ErrorPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
