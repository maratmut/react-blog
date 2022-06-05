import React, { useState } from "react";
import './app.css'
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BlogContent } from "./components/containers/BlogContent/BlogContent";
import {
  Route,
  Routes,
} from 'react-router-dom';
import LoginPage from "./components/containers/BlogContent/LoginPage/LoginPage";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true')
  const [userName, setUserName] = useState(localStorage.getItem('userName'))
  return (
    
    <div className="App">
      <Header isLoggedIn={isLoggedIn} userName={userName} setIsLoggedIn={setIsLoggedIn} />

      <main>
        <Routes>
          <Route path="/" element={<BlogContent />} />
            <Route path="/login"  
              element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} 
            />
        </Routes>  
      </main>
      
      <Footer year={new Date().getFullYear()} />

      
    </div>
    
  );
}

export default App;
