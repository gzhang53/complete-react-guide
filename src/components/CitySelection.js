
import  {useState} from "react";
import Form from 'react-bootstrap/Form';


function CitySelection(){
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    return (
    <div className="travel-item">
    <div>Location Selection</div>
    <div className="travel-time">
    <Form>
      <h2>Pickup City</h2>
      <Form.Group className="mb-3" controlId="formCityName">
        
        <Form.Control type="email" placeholder="Enter city Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCityName">
        <h2>Return City</h2>
        <Form.Control type="email" placeholder="Enter city Name" />
      </Form.Group>
    </Form>
    </div>
    

    </div>); 
    
            
    
};

export default CitySelection;