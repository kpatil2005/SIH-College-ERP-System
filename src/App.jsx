import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Shared/ProtectedRoute";
import UniversalLogin from "./components/Shared/UniversalLogin";

// General Pages
import HomePage from "./HomePage";
import AllLogin from "./components/Shared/alllogin";

// Student Pages
import StudentLogin from "./components/Student/StudentLogin";
import Studentmainlogin from "./components/Student/studentmainlogin";
import StudentDashboard from "./components/Student/StudentDashboard";
import Assignment from "./components/Student/Assignment";
import Attendance from "./components/Student/Attendance";
import FeePayment from "./components/Student/FeePayment";
import HostelFee from "./components/Student/HostelFee";
import PaymentHistory from "./components/Student/PaymentHistory";
import Result from "./components/Student/Result";
import Timetable from "./components/Student/Timetable";
import AcademicCalendar from "./components/Student/AcademicCalendar";
import TransportFee from "./components/Student/TransportFee";
import UploadDocuments from "./components/Student/UploadDocuments";
import ViewDocuments from "./components/Student/ViewDocuments";

// Admin Pages
import AdminMain from "./components/Admin/AdminMain";
import ProfilePage from "./components/Admin/ProfilePage";
import AdmissionsPage from "./components/Admin/AdmissionsPage";
import FinancePage from "./components/Admin/FinancePage";
import HostelPage from "./components/Admin/HostelPage";
import DashboardPage from "./components/Admin/DashboardPage";
import AccessPage from "./components/Admin/AccessPage";

// Parent Pages
import ParentLogin from "./components/Parent/ParentLogin";
import ParentMain from "./components/Parent/ParentMain";
import ParentDashboard from "./components/Parent/ParentDashboard";
import Payment from "./components/Parent/Payment";
import AttendanceRecord from "./components/Parent/AttendanceRecord";
import ExaminationResults from "./components/Parent/ExaminationResults";
import HostelStatus from "./components/Parent/HostelStatus";
import StudentProgress from "./components/Parent/StudentProgress";

// Faculty Pages
import FacultyLogin from "./components/Faculty/FacultyLogin";
import FacultyMain from "./components/Faculty/FacultyMain";
import FacultyProfilePage from "./components/Faculty/ProfilePage";
import AssignmentsPage from "./components/Faculty/AssignmentsPage";
import GradeEntryPage from "./components/Faculty/GradeEntryPage";
import AttendancePage from "./components/Faculty/AttendancePage";
import StudentLookupPage from "./components/Faculty/StudentLookupPage";
import PredictiveAnalytics from "./components/Faculty/PredictiveAnalytics";
import IoTDashboard from "./components/Admin/IoTDashboard";
import SustainabilityDashboard from "./components/Admin/SustainabilityDashboard";
import OnlineAdmissionPortal from "./components/Shared/OnlineAdmissionPortal";
import AdmissionManagement from "./components/Admin/AdmissionManagement";

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UniversalLogin />} />
        <Route path="/old-login" element={<AllLogin />} />
        <Route path="/admission" element={<OnlineAdmissionPortal />} />

        {/* Student Dashboard with Nested Routes */}
        <Route path="/student" element={
          <ProtectedRoute requiredRole="student">
            <Studentmainlogin />
          </ProtectedRoute>
        }>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="assignment" element={<Assignment />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="academic-fee" element={<FeePayment />} />
          <Route path="hostel-fee" element={<HostelFee />} />
          <Route path="transport-fee" element={<TransportFee />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="result" element={<Result />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="academic-calendar" element={<AcademicCalendar />} />
          <Route path="upload-documents" element={<UploadDocuments />} />
          <Route path="view-documents" element={<ViewDocuments />} />
        </Route>

        {/* Admin Dashboard with Nested Routes */}
        <Route path="/admin" element={
          <ProtectedRoute requiredRole="admin">
            <AdminMain />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="finance" element={<FinancePage />} />
          <Route path="hostel" element={<HostelPage />} />
          <Route path="access" element={<AccessPage />} />
          <Route path="iot" element={<IoTDashboard />} />
          <Route path="sustainability" element={<SustainabilityDashboard />} />
          <Route path="admission-management" element={<AdmissionManagement />} />
        </Route>

        {/* Faculty */}
        <Route path="/faculty" element={
          <ProtectedRoute requiredRole="faculty">
            <FacultyMain />
          </ProtectedRoute>
        }>
          <Route index element={<FacultyProfilePage />} />
          <Route path="profile" element={<FacultyProfilePage />} />
          <Route path="assignments" element={<AssignmentsPage />} />
          <Route path="grades" element={<GradeEntryPage />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="students" element={<StudentLookupPage />} />
          <Route path="analytics" element={<PredictiveAnalytics />} />
        </Route>

        {/* Parent Dashboard with Nested Routes */}
        <Route path="/parent" element={
          <ProtectedRoute requiredRole="parent">
            <ParentMain />
          </ProtectedRoute>
        }>
          <Route index element={<ParentDashboard />} />
          <Route path="profile" element={<ParentDashboard />} />
          <Route path="payments" element={<Payment />} />
          <Route path="attendance" element={<AttendanceRecord />} />
          <Route path="results" element={<ExaminationResults />} />
          <Route path="hostel" element={<HostelStatus />} />
          <Route path="progress" element={<StudentProgress />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
