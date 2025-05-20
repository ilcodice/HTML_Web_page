import Workspace from "./pages/Workspace";
import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute"

function App() {
  return (
    <>
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Leaderboard/> </ProtectedRoute>}/></Routes>
    </>
  );
}

export default App;
 