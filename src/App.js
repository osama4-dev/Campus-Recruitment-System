import './App.css';
import { BrowserRouter } from 'react-router-dom'
// import { ProvideAuth } from "./use-auth.js";



import Routing from './Routing/Routing'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    
      
      
      
    
    </div>
  );
}

export default App;
