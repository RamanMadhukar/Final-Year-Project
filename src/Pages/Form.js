import React, { useEffect, useState } from 'react'
import '../CSS/Map.css'
import { useNavigate } from "react-router-dom";
import { sendFormData } from '../Utils/Apis/Apis';
import Navbar from '../Components/Navbar';


const Form = () => {

    const bimariNo = Math.floor(5 * Math.random());
    const bimari = ["Dengue", "Malaria", "Covid-19", "Typhiod", "Tuberculosis"];


    const initialValue = {
        WeightLoss: '',
        nausea: '',
        Vomiting: '',
        skinRash: '',
        Cough: '',
        LossOfAppetite: '',
        Chills: '',
        Headache: '',
        Sweating: '',
        Fatigue: '',
        Constipation: '',
        StomachPain: '',
        PainBehindtheEyes: '',
        Diarrhoea: '',
        HighFever: '',
        MildFever: '',
        JointPain: '',
        MusclePain: '',
        LossofSmell: '',
    }

    const navigate = useNavigate();

    const [patient, setPatient] = useState(initialValue);
    const [position, setPosition] = useState({
        lat: '',
        long: ''
    })
    const [loaction, setloaction] = useState(true)

    const {
        WeightLoss,
        nausea,
        Vomiting,
        skinRash,
        Cough,
        LossOfAppetite,
        Chills,
        Headache,
        Sweating,
        Fatigue,
        Constipation,
        StomachPain,
        PainBehindtheEyes,
        Diarrhoea,
        HighFever,
        MildFever,
        JointPain,
        MusclePain,
        LossofSmell
    } = patient;

    const handleChange = name => event => {
        setPatient({ ...patient, [name]: event.target.value });
    };

    const clickSubmit = async event => {
        event.preventDefault();
        setPatient({ ...patient });

        const postData = await sendFormData({ patient, position })
            .then(() => {
                // console.log("submited");
                alert("You may be infected by "+bimari[bimariNo])
                navigate('/', { state: { bimariNo } })
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

    console.log(bimariNo);


    return (

        <>

            <Navbar />
            {
                loaction ?

                    (
                        <form className='form' >

                            <p className='mb-3'><h2  >Fill health status </h2>(location access is mandatory)</p>

                            <div className='fromDiv row'>


                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="WeightLoss">Weight Loss</label>
                                    <select required className="form-select mb-3" name="disease" onChange={handleChange('WeightLoss')} value={WeightLoss} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="nausea">Nausea</label>
                                    <select required className="form-select mb-3" name="nausea" onChange={handleChange('nausea')} value={nausea} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Vomiting">Vomiting</label>
                                    <select required className="form-select mb-3" name="Vomiting" onChange={handleChange('Vomiting')} value={Vomiting} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="skinRash">Skin Rash</label>
                                    <select required className="form-select mb-3" name="skinRash" onChange={handleChange('skinRash')} value={skinRash} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Cough">Cough</label>
                                    <select required className="form-select mb-3" name="Cough" onChange={handleChange('Cough')} value={Cough} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="LossOfAppetite">Loss of Appetite</label>
                                    <select required className="form-select mb-3" name="LossOfAppetite" onChange={handleChange('LossOfAppetite')} value={LossOfAppetite} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Chills">Chills</label>
                                    <select required className="form-select mb-3" name="Chills" onChange={handleChange('Chills')} value={Chills} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Headache">Headache</label>
                                    <select required className="form-select mb-3" name="Headache" onChange={handleChange('Headache')} value={Headache} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Sweating">Sweating</label>
                                    <select required className="form-select mb-3" name="Sweating" onChange={handleChange('Sweating')} value={Sweating} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Fatigue">Fatigue</label>
                                    <select required className="form-select mb-3" name="Fatigue" onChange={handleChange('Fatigue')} value={Fatigue} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Constipation">Constipation</label>
                                    <select required className="form-select mb-3" name="Constipation" onChange={handleChange('Constipation')} value={Constipation} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="StomachPain">Stomach Pain</label>
                                    <select required className="form-select mb-3" name="StomachPain" onChange={handleChange('StomachPain')} value={StomachPain} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="PainBehindtheEyes">Pain Behind the Eyes</label>
                                    <select required className="form-select mb-3" name="PainBehindtheEyes" onChange={handleChange('PainBehindtheEyes')} value={PainBehindtheEyes} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="Diarrhoea">Diarrhoea</label>
                                    <select required className="form-select mb-3" name="Diarrhoea" onChange={handleChange('Diarrhoea')} value={Diarrhoea} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="HighFever">High Fever</label>
                                    <select required className="form-select mb-3" name="HighFever" onChange={handleChange('HighFever')} value={HighFever} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="MildFever">Mild Fever</label>
                                    <select required className="form-select mb-3" name="MildFever" onChange={handleChange('MildFever')} value={MildFever} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="JointPain">Joint Pain</label>
                                    <select required className="form-select mb-3" name="JointPain" onChange={handleChange('JointPain')} value={JointPain} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="MusclePain">Muscle Pain</label>
                                    <select required className="form-select mb-3" name="MusclePain" onChange={handleChange('MusclePain')} value={MusclePain} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="col-6">
                                    <label className="form-label mb-3" htmlFor="LossofSmell">Loss of Smell</label>
                                    <select required className="form-select mb-3" name="LossofSmell" onChange={handleChange('LossofSmell')} value={LossofSmell} >
                                        <option value="" disabled>Select</option>
                                        <option value="1">YES</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                            </div>

                            <button className='btn btn-primary' onClick={clickSubmit}>Submit</button>


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