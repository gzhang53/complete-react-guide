
import  {useState} from "react";
import Button from 'react-bootstrap/Button';


function TotalPrice(){
 
    return (
     
    <div className="pay">
        
        <div>
            <div>
                <div className="totalPrice">
                    Total Price :$1,234
                </div>
                <div>
                <Button className = "buttonStyle" variant="outline-dark">Pay</Button>
                </div>
            </div>
        </div> 
     
    </div>
   ); 
    
            
    
};

export default TotalPrice;