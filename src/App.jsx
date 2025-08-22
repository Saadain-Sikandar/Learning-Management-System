import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";
import AuthRoute from "./Routes/AuthRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ClassList from "./Screens/ClassList";
import DashBoard from "./Screens/DashBoard";
import ExamForm from "./Screens/ExamForm";
import ExamSchedule from "./Screens/ExamSchedule";
import FeesStructure from "./Screens/FeesStructure";
import Feesupdateform from "./Screens/Feesupdateform";
import Login from "./Screens/Login";
import NotFound from "./Screens/NotFound";
import SignupForm from "./Screens/SIgnUp";
import StudentForm from "./Screens/StudentForm";
import Students from "./Screens/StudentsList";
import SubjectForm from "./Screens/SubjectForm";
import SubjectList from "./Screens/SubjectList";
import SyllabusForm from "./Screens/SyllabusForm";
import SyllabusList from "./Screens/SyllabusList";
import TeacherForm from "./Screens/TeacherForm";
import TeacherList from "./Screens/TeacherList";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/Studentform" element={<StudentForm />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/teacherform" element={<TeacherForm />} />
          <Route path="/subjectform" element={<SubjectForm />} />
          <Route path="/subjectlist" element={<SubjectList />} />
          <Route path="/syllabusform" element={<SyllabusForm />} />
          <Route path="/syllabus" element={<SyllabusList />} />
          <Route path="/examform" element={<ExamForm />} />
          <Route path="/examschedule" element={<ExamSchedule />} />
          <Route path="/feesstructure" element={<FeesStructure />} />
          <Route path="/FeesStructureupdate" element={<Feesupdateform />} />
          <Route path="/classlist" element={<ClassList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default App;
