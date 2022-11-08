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
    const [loaction, setloaction] = useState(true)

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
                navigate('/map')
            })
            .catch(error => {
                console.log(error);
            });


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

    // const fetchLoaction = (event) => {
    //     event.preventDefault();
    //     navigator.geolocation.getCurrentPosition((e) => {
    //         setPosition({ lat: e.coords.latitude, lng: e.coords.longitude })
    //         // setloaction(true);
    //     });

    // }





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
                                    <option value="nfluenza">Influenza</option>
                                    <option value="maleria">Malaria</option>
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