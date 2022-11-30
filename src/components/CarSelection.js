
import  {useState} from "react";
import MenuItem from 'react-bootstrap/Dropdown';
import Select from 'react-select'



function CarSelection(){
  

    const carAvailable = [
        {label:'Toyota    '},
        {label:'Nissan    '},
        {label:'Volkswagen'},
        {label:'Ford      '},
        {label:'Dodge     '}
    ];
    const [selectedValue, setSelectedValue] = useState(null);
    const handleChange = obj =>{
        setSelectedValue(obj);
    }
    return (
    <div className="travel-item">
        <div>Car Selection</div>
        <div className="travel-time">
        <div className="selection">
        <Select  value={selectedValue} 
                onChange = {option => setSelectedValue(option)}
                options={carAvailable}
                getOptionValue={(option)=>option.label}
        />
        </div>
    </div>
    

    </div>); 
    
            
    
};

export default CarSelection;