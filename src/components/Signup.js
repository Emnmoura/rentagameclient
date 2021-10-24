import React, { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../api/api.config';
import Footer from './footer/Footer';

const INITIAL_FORM = {
    username: "",
    password: ""
}

const Signup = () => {
    const [formValues, setFormValues] = useState({ ...INITIAL_FORM });
    const history = useHistory()

    const handleChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post('/signup', formValues)
            history.push('/login')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='d-flex vh-100 flex-column align-items-center justify-content-center'>
                <label>Usuário:</label>
                <input className='form-control w-25' type="text" name='username' value={formValues.username} onChange={handleChange} />

                <label>Senha:</label>
                <input className='form-control w-25' type="password" name='password' value={formValues.password} onChange={handleChange} />
            </form>
            <button className='btn btn-dark mt-3' >Signup</button>
        </div>
    );
}

export default Signup;