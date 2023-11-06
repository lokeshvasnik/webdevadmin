import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Achievement from "./components/Achievement";
import Goal from "./components/Goal";
import Question from "./components/Question";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="goals" element={<Goal />} />
                        <Route path="achievements" element={<Achievement />} />
                        <Route path="questions" element={<Question />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
