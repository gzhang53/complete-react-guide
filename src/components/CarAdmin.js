
import  {useState} from "react";
import Form from 'react-bootstrap/Form';


function CarAdmin(){
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    return (
    <div className="travel-item">
    <div>Admin Panel</div>
    <div className="travel-time">
    <Form>
      <h2>Add new Car</h2>
      <Form.Group className="mb-3" controlId="formCityName">
        
        <Form.Control type="email" placeholder="Add a new car" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCityName">
        <h2>Update car details</h2>
        <Form.Control type="email" placeholder="Update car details" />
      </Form.Group>
      <input type="submit" value="Submit" />
    </Form>
    </div>
    

    </div>); 
    
            
    
};

export default CarAdmin;