import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";

import StudentLayout from "./Layout/StudentLayout";
import ApplyPage from "./Pages/ApplyPage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/student/dashboard";
import FinancialAidPage from "./Pages/student/financialAid/FinancialAidPage";
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
import ApplicantsLayout from "./Layout/admin/ApplicantsLayout";
import AdminReview from "./Layout/admin/AdminReview";
import UndergradReview, {
  loader as ugreviewLoader,
} from "./Pages/admin/review/undergrad";
import GradReview from "./Pages/admin/review/graduate";
import Recommendations from "./Pages/student/recommendation/recommensation";
import StudentDetailsUndergrad from "./Pages/admin/students/details/studentDetailsUnderGrad";
import AdminCurrentStudentLayout from "./Layout/admin/students/StudentLayout";
import UnderGrad, {
  loader as userUnderGradLoader,
} from "./Pages/admin/students/underGrad";
import Gradute from "./Pages/admin/students/Graduate";
import StudentDetailsGradute from "./Pages/admin/students/details/StudentDetailsGraduate ";
import GraduatesApplicants from "./Pages/admin/applicants/GraduateApplicants";
import UndergradApplicants, {
  loader as ugApplicantsLoader,
} from "./Pages/admin/applicants/undergradApplicants";
import DetailGraduateDoc from "./Pages/admin/review/details/DetailGrduateDoc";
import DetailUndergradDoc from "./Pages/admin/review/details/DetailUnderGradDocument";
import UndergradApplicantDetails from "./Pages/admin/applicants/Details.jsx/UnderGradApplicantDetails";

//defining routers
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
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
          <Route path="students" element={<StudentSharedLayout />}>
            <Route index element={<UnderGrad />} loader={userUnderGradLoader} />
            <Route path="graduate" element={<Gradute />} />
          </Route>
          <Route path="students/:id" element={<StudentDetailsUndergrad />} />
          <Route
            path="students/graduate/:id"
            element={<StudentDetailsGradute />}
          />
        </Route>

        {/* New Applicants to Admin Board */}
        <Route path="New-applicants" element={<ApplicantsLayout />}>
          <Route
            index
            element={<UndergradApplicants />}
            loader={ugApplicantsLoader}
          />
          <Route path="graduate" element={<GraduatesApplicants />} />
        </Route>
        <Route
          path="New-applicants/:id"
          element={<UndergradApplicantDetails />}
        />
        <Route path="New-applicants/graduate/:id" element={<Construction />} />

        {/* Reviewed Activities */}
        <Route path="reviews" element={<AdminReview />}>
          <Route index element={<UndergradReview />} loader={ugreviewLoader} />
          <Route path="graduate" element={<GradReview />} />
        </Route>
        <Route path="reviews/:id" element={<DetailUndergradDoc />} />
        <Route path="reviews/graduate/:id" element={<DetailGraduateDoc />} />

        <Route path="sat-students" element={<Construction />} />
        <Route path="sat-students/:name" element={<Construction />} />

        <Route path="broadcast" element={<Construction />} />
        <Route path="chat" element={<Construction />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
