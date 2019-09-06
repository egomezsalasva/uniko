//Library Imports
import React from 'react';
//Component Imports
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/footer/Footer';


//Main Component
function App() {
  return (
    <div className="App">
      <Header />
      <Home /> 
      <Footer />   
    </div>
  );
}


//Export 
export default App;
