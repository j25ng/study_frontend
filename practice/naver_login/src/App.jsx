import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./Home";
import Todo from "./components/Todo";
import PrivateRoute from "./components/PrivateRoute";
import { useVerify } from "./hooks/useVerify";

function App() {
  const navigate = useNavigate();

  useVerify({
    onSuccess: () => navigate("/todo"),
    onFailure: () => {},
  });

  return (
    <Routes>
      {/* 홈 라우팅 */}
      <Route path="/" element={<Home />} />
      <Route
        path="todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
