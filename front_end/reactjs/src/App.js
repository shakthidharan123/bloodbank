
import './App.css';
import LoginForm from './Components/Assests/Loginform';
import Dash from './Components/Assests/Dashboard';
import Card1 from'./Components/Assests/card1';
import Donor from './Components/Assests/Donor';
import './login.css';
import{Route,Routes } from "react-router-dom"
import Table from './Components/Assests/table'
import Bstock from './Components/Assests/bstock'




function App() {
  return (
    <Routes>
      
    <Route exact path="/login" element={<LoginForm /> }></Route>

    <Route exact path="/dashboard" element={<div className='DashBoard'><Dash /></div>} >
        <Route exact path='stock' element={<Card1 />}  />
        <Route exact path='donor' element={<Donor />} />
        <Route exact path='bloodbank' element={<Table />} >
            <Route exact path='bstock' element={<Bstock />} />
        </Route>        
      </Route>  
    </Routes>
  
  );
}

export default App;
