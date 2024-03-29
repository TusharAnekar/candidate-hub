import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Candidate } from "./pages/Candidate";
import { NewCandidate } from "./pages/NewCandidate";
import { RequiresAuth } from "./components/RequiresAuth";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {location.pathname !== "/login" && <Header />}

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path=""
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/candidate/:candidateId"
          element={
            <RequiresAuth>
              <Candidate />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/candidate/new"
          element={
            <RequiresAuth>
              <NewCandidate />
            </RequiresAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
