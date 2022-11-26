import React, { useEffect, useState } from 'react'
import '../CSS/Map.css'
import { useNavigate } from "react-router-dom";
import { sendFormData } from '../Utils/Apis/Apis';


const Form = () => {

    const initialValue = {
        name: '',
        age: '',
        disease: '',
    }

    const navigate = useNavigate();

    const [patient, setPatient] = useState(initialValue);
    const [position, setPosition] = useState({
        lat: '',
        lng: ''
    })
    const [loaction, setloaction] = useState(true)

    const { name, age, disease } = patient;

    const handleChange = name => event => {
        setPatient({ ...patient, [name]: event.target.value });
    };

    const clickSubmit = async event => {
        event.preventDefault();
        setPatient({ ...patient });

        const postData = await sendFormData({ patient, position })
            .then(() => {
                console.log("submited");
                navigate('/map')
            }).catch(error => {
                console.log(error);
            });

            postData();
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((e) => {
                setPosition({ lat: e.coords.latitude, lng: e.coords.longitude })
                setloaction(true);
            });
        } else {
            console.log("Geo Location not supported by browser");
            setloaction(false);
        }
    }, []);


    return (

        <>
            {
                loaction ?

                    (
                        <form className='form' >
                            <div className='fromDiv'>
                                <p className='mb-3'><h2  >Fill health status </h2>(location access is mandatory)</p>
                                <label className="form-label mb-3" htmlFor="name">Name</label>
                                <input className="form-control mb-3" name='name' type="text" placeholder='Name' onChange={handleChange('name')} value={name} />
                                <label className="form-label mb-3" htmlFor="age">Age</label>
                                <input className="form-control mb-3" name='age' type="number" placeholder='Age' onChange={handleChange('age')} value={age} />
                                <label className="form-label mb-3" htmlFor="disease">Disease</label>
                                <select required className="form-select mb-3" name="disease" onChange={handleChange('disease')} value={disease} >
                                    <option value="" disabled>Select</option>
                                    <option value="dengue">Dengue</option>
                                    <option value="influenza">Influenza & Common Cold</option>
                                    <option value="malaria">Malaria</option>
                                </select>
                                {/* <button className='btn btn-primary' onClick={fetchLoaction}>loaction</button> */}
                                <button className='btn btn-primary' onClick={clickSubmit}>Submit</button>
                            </div>
                        </form>
                    )
                    :
                    (
                        <p>Please allow loaction</p>
                    )
            }
        </>

    )

}

export default Form