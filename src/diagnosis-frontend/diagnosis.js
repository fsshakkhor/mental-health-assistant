import { useState } from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


function Diagnosis(props) {
    const options = [
        { value: 'chocolate', label: 'Fear of Being Alone' },
        { value: 'strawberry', label: 'Sadness' },
        { value: 'vanilla', label: 'Tiredness' },
        {value : "shak", label : "Fear of Strangers"}
    ]

    var [DisplayValue , getValue] = useState();  
    
    var handle = (e) => {
        getValue(Array.isArray(e) ? e.map(x => x.label) : []);
    }

    return (
        <div>
            <h2><center>Select A Few Of Your Symptoms From The List</center> </h2>
            <Select className="mt-4 col-md-8 col-offset-4" isMulti options = {options} onChange={handle}>
            </Select>
            <center>
                {DisplayValue}
            </center>
        </div>
    );
  }
  
  export default Diagnosis;