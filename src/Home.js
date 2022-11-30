import ExpenseItem from './components/ExpenseItem';
import CitySelection from './components/CitySelection';
import CarSelection from './components/CarSelection';
import MemberLogin from './components/MemberLogin';
import TotalPrice from './components/TotalPrice';
import Admin from './Admin'
import {Route, Routes,Link} from 'react-router-dom'
function Home() {
  return (
    <div>
      <h2>Car Rental System</h2>
      <ExpenseItem></ExpenseItem>
      <CitySelection></CitySelection>
      <CarSelection></CarSelection>
      <MemberLogin></MemberLogin>
      <TotalPrice></TotalPrice>
    </div>
    
  );
}

export default Home;