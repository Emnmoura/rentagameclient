import React, { useState } from 'react';
import { Link } from "react-router-dom";
import api from '../api/api.config';
import AuthForm from './AuthForm';
import Carousel from 'react-bootstrap/Carousel'


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
            props.setUser(result.data.user)
            props.history.push('/main')
        } catch (error) {
            console.error(error);
        }
    };

    return (<>
        
      <img className="background-position-center"
 src="https://user-images.githubusercontent.com/84294089/139520041-3be40e60-c20d-4743-9a65-58daaa5baecb.png"/>

        <div className="bg-secondary d-flex flex-column justify-content-center align-items-center p-4">
            <AuthForm 
                values={formValues} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                buttonLabel='Entrar'
                type="Login"
            />
            <p className='mt-3'>Cadastre-se <Link className='link-dark' to='/signup'>aqui</Link> </p>
        </div></>
        
    );
}

export default Login;