import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Map.css'
import { useNavigate } from "react-router-dom";


const Form = () => {

    const initialValue = {
        name: '',
        age: '',
        disease: '',
    }

    // console.log(process.env.REACT_APP_BASE);

    const navigate = useNavigate();

    const [patient, setPatient] = useState(initialValue);
    const [position, setPosition] = useState({
        lat: '',
        lng: ''
    })

    const { name, age, disease } = patient;

    const handleChange = name => event => {
        setPatient({ ...patient, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setPatient({ ...patient });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BASE}/patient`,
            data: { patient, position },
        })
            .then(response => {
                console.log("submited");
                // navigate('/map')
            })
            .catch(error => {
                console.log(error);
            });


    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((e) => {
                setPosition({ lat: e.coords.latitude, lng: e.coords.longitude })
            });
        } else {
            console.log("Geo Location not supported by browser");
        }
    }, [])


    return (
        <form className='form' >
            <div className='fromDiv'>
                <label className="form-label mb-3" htmlFor="name">Name</label>
                <input className="form-control mb-3" name='name' type="text" placeholder='Name' onChange={handleChange('name')} value={name} />
                <label className="form-label mb-3" htmlFor="age">Age</label>
                <input className="form-control mb-3" name='age' type="number" placeholder='Age' onChange={handleChange('age')} value={age} />
                <label className="form-label mb-3" htmlFor="disease">Disease</label>
                <select className="form-select mb-3" name="disease" onChange={handleChange('disease')} value={disease} >
                    <option value="dengue">Dengue</option>
                    <option value="maleria">Maleria</option>
                </select>
                <button className='btn btn-primary' onClick={clickSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Form