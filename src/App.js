import Admin from './Admin'
import Home from './Home'
import {Route, Routes,Link} from 'react-router-dom'
function App() {
  return (
    <div>
      {/* <h2>Car Rental System</h2>
      <ExpenseItem></ExpenseItem>
      <CitySelection></CitySelection>
      <CarSelection></CarSelection>
      <MemberLogin></MemberLogin>
      <TotalPrice></TotalPrice> */}
      <Routes>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
