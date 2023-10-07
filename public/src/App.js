import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import Chatdemo from "./component/Chatdemo";
import { AuthContext } from "./context/AuthContext";
import Comhome from "./component/Comhome";
function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <>
    <Router>
      <Routes> 
      <Route 
            index
            element={
              <ProtectedRoute>
                <Comhome />
              </ProtectedRoute>
            }
          />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<Chatdemo/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>

    </Router>
     
    </>
  );
}

export default App;
