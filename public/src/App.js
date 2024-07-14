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
import Post from "./pages/Post"
import Profile from "./pages/Profile"
import Quiz from "./pages/Quiz";
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
                <Home />
              </ProtectedRoute>
            }
          />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<Chatdemo/>}/>
         <Route path='/' element={<Home/>}/> 
        <Route path='/post' element={<Post/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>

    </Router>
     
    </>
  );
}

export default App;
