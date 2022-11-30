import　'./ExpenseItem.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import  {useState} from "react";

function ExpenseItem(){
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    return (
    <div className="travel-item">
    <div>Travel Time</div>
    <div className="travel-time">
            <div className="travel-container">
            <h2>Pickup Time</h2>
            
            <DatePicker selected ={selectedDate1} 
            onChange = {date => setSelectedDate1(date)}/>
            <h2>Return Time</h2>
            
            <DatePicker selected ={selectedDate2} 
            onChange = {date => setSelectedDate2(date)}/>
            </div>
    </div>
    

    </div>); 
    
            
    
};

export default ExpenseItem;