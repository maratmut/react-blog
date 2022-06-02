import React from "react";
import './app.css'
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BlogContent } from "./components/BlogContent/BlogContent";


function App() {
  return (
    <div>
      <Header />
      <main>
      <BlogContent />
      </main>
      
      <Footer year={new Date().getFullYear()} />

      
    </div>
  );
}

export default App;
