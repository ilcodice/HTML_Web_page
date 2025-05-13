import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Route, Router, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
