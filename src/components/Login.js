import React, {useState} from 'react';
import { Link } from "react-router-dom";
import api from '../api/api.config';
import AuthForm from './AuthForm';

const INITIAL_FORM_VALUES = {
    username: "",
    password: "",
};

const Login = (props) => {
    const [formValues, setFormValues] = useState({ ...INITIAL_FORM_VALUES });

    const handleChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await api.post('/login', formValues);
            localStorage.setItem('token', result.data.token)
            props.history.push('/')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-secondary d-flex flex-column justify-content-center align-items-center vh-100">
            <AuthForm 
                values={formValues} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                buttonLabel='Entrar'
                type="Login"
            />
            <p className='mt-3'>Cadastre-se <Link className='link-light' to='/signup'>aqui</Link> </p>
        </div>
    );
}

export default Login;