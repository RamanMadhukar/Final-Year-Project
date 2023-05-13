import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase/Firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

const db = getFirestore(app);
const storage = getStorage(app)

const UserDetails = () => {

    const navigate = useNavigate();

    const [imageUpload, setImageUpload] = useState(null)

    const [uid, setUid] = useState();
    const [position, setPosition] = useState({
        lat: '',
        long: ''
    })

    const [userData, setUserData] = useState({
        name: '',
        mobile: '',
        location: '',
        existing_disease: '',
        medical_report: ''
    })

    const handelChange = name => e => {
        console.log(e);
        setUserData({ ...userData, [name]: e.target.value });
    }

    const postUser = async () => {
        setUserData({ ...userData, uid, position })
        try {
            const docRef = await addDoc(collection(db, "users"), userData);
            if (docRef) {
                if (imageUpload == null) return;
                const imageRef = ref(storage, `images/${uid}/${imageUpload.name}`);
                uploadBytes(imageRef, imageUpload).then(() => {
                    navigate('/dashboard')
                    setUserData({
                        name: '',
                        mobile: '',
                        location: '',
                        existing_disease: '',
                        medical_report: ''
                    });
                })
            }
        } catch (e) {
            console.log('error in adding data', e)
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUid(user?.uid);
        }
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((e) => {
                setPosition({ lat: e.coords.latitude, lng: e.coords.longitude })
            });
        } else {
            console.log("Geo Location not supported by browser");
        }
    }, []);

    return (
        <>
            <Navbar />

            <div className="vh-100 d-flex flex-column justify-content-center mx-auto" style={{ maxWidth: '600px' }}>

                <div className="mb-3">
                    <label className='form-label' htmlFor="name">Name</label>
                    <input className='form-control' type='text' value={userData?.name} placeholder='Enter your name' required onChange={handelChange('name')} />
                </div>

                <div className="mb-3">
                    <label className='form-label' htmlFor="name">Mobile Number</label>
                    <input className='form-control' type='tel' value={userData?.mobile} placeholder='Enter your contact number' required onChange={handelChange('mobile')} />
                </div>

                <div className="mb-3">
                    <label className='form-label ' htmlFor="name">If you have any disease ?</label>
                    <span className='form-text ml-3'>    ( if any )</span>
                    <input className='form-control' type='tel' value={userData?.existing_disease} placeholder='Enter your contact number' onChange={handelChange('existing_disease')} />
                </div>

                <div className="mb-3">
                    <label className='form-label' htmlFor="name">Medical Report</label>
                    <span className='form-text ml-3'>    ( if any )</span>
                    <input className='form-control' type='file' placeholder='Upload your report here' onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                </div>

                <button className='btn btn-primary mb-3 ' onClick={postUser}>Submit</button>

            </div >
        </>
    )
}

export default UserDetails