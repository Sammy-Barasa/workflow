import React, { useEffect }from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StateProvider from "./Context/stateProvider"
import Home from './Components/Home'
import './App.css'


function App() {
 
    
    useEffect(()=>{
      
    },[])
      
  return (
    <StateProvider>
       <Router>
         
           <Home/>
         
      </Router>
     </StateProvider>
    
  );
}

export default App;
