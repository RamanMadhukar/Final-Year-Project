import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate  = useNavigate();
    const auth = getAuth();

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    }
    )

    const handelChange = name => e => {
        setUserData({ ...userData, [name]: e.target.value });
    }

    const { email, password } = userData;

    const login = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            if(res.operationType=='signIn'){
             navigate('/')   
            }

        } catch (err) {
            console.error(err);
            alert('wrong email-id or password');
        }
    }

    return (
        <>

            <Navbar />

            <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}>

                <div className="mb-3">
                    <label className='form-label' htmlFor="name">Email</label>
                    <input className='form-control' type='email' value={userData?.email} placeholder='Enter your email' required onChange={handelChange('email')} />
                </div>
                <div className="mb-3">
                    <label className='form-label' htmlFor="name">Password</label>
                    <input className='form-control' type='password' value={userData?.password} placeholder='Enter your password' required onChange={handelChange('password')} />
                </div>
                <button className='btn btn-primary' onClick={login}>Log In</button>

            </div>
        </>
    )
}

export default Signin