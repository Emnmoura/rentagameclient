import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AuthForm from "../components/AuthForm";
import api from '../api/api.config';
import Footer from './footer/Footer';

const INITIAL_FORM_VALUES = {
    username: "",
    password: "",
};

const Signup = (props) => {
    const [formValues, setFormValues] = useState({ ...INITIAL_FORM_VALUES });
    const history = useHistory()
    
    const handleChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await api.post('/signup', formValues)
            history.push('/')
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="bg-primary d-flex flex-column justify-content-center align-items-center vh-100">
            <AuthForm 
            values={formValues} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            buttonLabel='Cadastrar' 
            />
        </div>
    );
};

export default Signup;