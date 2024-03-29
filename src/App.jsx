import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentLayout from "./Layout/StudentLayout";
import ApplyPage from "./Pages/ApplyPage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/student/dashboard";
import FinancialAidPage from "./Pages/student/financialAid/FinancialAidPage";
import Interview from "./Pages/student/Interview";
import Recommendation from "./Pages/student/Recommendation";
import Review from "./Pages/student/Review";
import ActivityLayout from "./Layout/student/ActivityLayout";
import Construction from "./Pages/Construction";
import ActivityTips from "./Pages/student/activity/ActivityTips";
import ActivityOverview from "./Pages/student/activity/ActivityOverview";
import ActivityPage from "./Pages/student/activity/ActivityPage";
import EssaysLayout from "./Layout/student/essayLayout";
import RecomendationLayout from "./Layout/student/recommendation";
import FinancialAIdLayout from "./Layout/student/Aid";
import InterviewLayout from "./Layout/student/Interview";
import EditEssayPage from "./Pages/student/essays/EditEssayPage";
import EssayIntroductionPage from "./Pages/student/essays/Introduction";
import AdminLayout from "./Layout/Admin.layout";
import StudentSharedLayout from "./Layout/admin/students/StudentSharedLayout";
import Applicants from "./Pages/admin/applicants";
import AdminReview from "./Layout/admin/AdminReview";
import UndergradReview from "./Pages/admin/review/undergrad";
import GradReview from "./Pages/admin/review/graduate";
import Recommendations from "./Pages/student/recommendation/recommensation";
import StudentDetailsUndergrad from "./Pages/admin/students/details/studentDetailsUnderGrad";
import AdminCurrentStudentLayout from "./Layout/admin/students/StudentLayout";
import UnderGrad from "./Pages/admin/students/underGrad";
import Gradute from "./Pages/admin/students/Graduate";
import StudentDetailsGradute from "./Pages/admin/students/details/StudentDetailsGraduate ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="*" element={<ErrorPage />} />

        {/* Student Dashboard */}
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="activities" element={<ActivityLayout />}>
            <Route index element={<ActivityOverview />} />
            <Route path="Tips" element={<ActivityTips />} />
            <Route path="Honor-and-Activity" element={<ActivityPage />} />
          </Route>
          <Route path="Essays" element={<EssaysLayout />}>
            <Route index element={<EssayIntroductionPage />} />
            <Route path="Edit-Essays" element={<EditEssayPage />} />
          </Route>
          <Route path="financial-aid" element={<FinancialAIdLayout />}>
            <Route index element={<EssayIntroductionPage />} />
            <Route
              path="edit-financial-documents"
              element={<FinancialAidPage />}
            />
          </Route>
          <Route path="recommendation" element={<RecomendationLayout />}>
            <Route index element={<EssayIntroductionPage />} />
            <Route path="invite" element={<Recommendations />} />
          </Route>
          <Route path="interview" element={<InterviewLayout />}>
            <Route index element={<Construction />} />
          </Route>
          <Route path="Reviews" element={<Review />} />
          <Route path="notification" element={<ErrorPage />} />
          <Route path="chat" element={<ErrorPage />} />
        </Route>

        {/* //Admin Route */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Construction />} />
          <Route element={<AdminCurrentStudentLayout />}>
            {/* Students Documents: It contains Graduate and Undergradute Students. 
            When click on Gradute will take to new page to display student ingo */}
            <Route path="students" element={<StudentSharedLayout />} >
              <Route index element={<UnderGrad />} />
              <Route path="graduate" element={<Gradute />} />
            </Route>
            <Route path="students/:id" element={<StudentDetailsUndergrad />} />
            <Route path="students/graduate/:id" element={<StudentDetailsGradute />} />
          </Route>

{/* New Applicants to Admin Board */}
          <Route path="New-applicants" element={<Applicants />} />
          <Route path="New-applicants/:name" element={<Construction />} />

          <Route path="sat-students" element={<Construction />} />
          <Route path="sat-students/:name" element={<Construction />} />

          <Route path="reviews" element={<AdminReview />}>
            <Route index element={<UndergradReview />} />
            <Route path="graduate" element={<GradReview />} />
          </Route>
          <Route path="reviews/:id" element={<Construction />} />
          <Route path="broadcast" element={<Construction />} />
          <Route path="chat" element={<Construction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
