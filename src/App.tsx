import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/UI/Layout";
import Achievement from "./components/Achievement";
import Goal from "./components/Goal";
import Question from "./components/Question";
import Login from "./pages/Login";
import ProtectedRoute from "./components/UI/ProtectedRoute";
import Topic from "./components/Topic";
import Projects from "./components/Projects";
import "./App.css";
import Profile from "./components/shared/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="goals" element={<Goal />} />
          <Route path="achievements" element={<Achievement />} />
          <Route path="questions" element={<Question />} />
          <Route path="topics" element={<Topic />} />
          <Route path="projects" element={<Projects />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
