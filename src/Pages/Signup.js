import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../Firebase/Firebase';
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { FirebaseError } from 'firebase/app';

const auth = getAuth(app);

const Signup = () => {

    const navigate = useNavigate();


    const [userData, setUserData] = useState(
        {
            email: '',
            password: '',
        }
    )

    const handelChange = name => e => {
        setUserData({ ...userData, [name]: e.target.value });
    }


    const createUser = () => {
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential
                localStorage.setItem('user', JSON.stringify(user.user))
                setUserData({
                    name: '',
                    mobile: '',
                    email: '',
                    password: '',
                })
                navigate('/details')
                console.log(auth);
            })
            .catch((error) => {
                if (error.code == "auth/email-already-in-use"){
                    alert('already registered')
                }
            })


    }

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}>

            <h2 className='text-center'>Register</h2>

                <div className="mb-3">
                    <label className='form-label' htmlFor="name">Email</label>
                    <input className='form-control' type='email' value={userData?.email} placeholder='Enter your email' required onChange={handelChange('email')} />
                </div>
                <div className="mb-3">
                    <label className='form-label' htmlFor="name">Password</label>
                    <input className='form-control' type='password' value={userData?.password} placeholder='Enter your password' required onChange={handelChange('password')} />
                </div>
                <button className='btn btn-primary' onClick={createUser}>Sign Up</button>

            </div>
        </>
    )
}
export default Signup;