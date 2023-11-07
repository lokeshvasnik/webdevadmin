import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/UI/Layout";
import Achievement from "./components/Achievement";
import Goal from "./components/Goal";
import Question from "./components/Question";
import ToastLayout from "./components/UI/ToastLayout";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="goals" element={<Goal />} />
          <Route path="achievements" element={<Achievement />} />
          <Route path="questions" element={<Question />} />
        </Route>
      </Routes>
      <ToastLayout />
    </Router>
  );
}

export default App;
