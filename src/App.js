import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicRoute restricted={true} />}>
            <Route path="/auth" element={<Auth />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
