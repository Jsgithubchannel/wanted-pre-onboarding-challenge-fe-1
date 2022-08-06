import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import SignUp from "./pages/SignUp/SignUp";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";
import Todos from "./pages/Todo/Todos";
import TodoDetail from "./pages/TodoDetail/TodoDetail";

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
            <Route path="/" element={<Todos />} />
            <Route path="/detail/:id" element={<TodoDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
