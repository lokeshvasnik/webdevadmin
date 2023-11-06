import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Achievement from "./components/Achievement";
import Goal from "./components/Goal";
import Question from "./components/Question";
import { Slide, ToastContainer } from "react-toastify";
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
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                transition={Slide}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Router>
    );
}

export default App;
