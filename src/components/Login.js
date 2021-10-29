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

    return (
        <>
        <div className='col-md-2 d-flex justify-content-center align-items-center' >
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://user-images.githubusercontent.com/84294089/139427207-b7468e01-6017-4724-9c88-b770c4e482dd.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://user-images.githubusercontent.com/84294089/139427449-fa85ef04-5207-4427-96d8-8b332999eda0.jpg"
      alt="Second slide"
    />    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://user-images.githubusercontent.com/84294089/139428116-fc353b23-e2e3-4961-a218-4bee3e5f6c8a.jpg"
      alt="Third slide"
    />     
    
  </Carousel.Item>

</Carousel>

</div>

        <div className="bg-secondary d-flex flex-column justify-content-center align-items-center p-4">
            <AuthForm 
                values={formValues} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                buttonLabel='Entrar'
                type="Login"
            />
            <p className='mt-3'>Cadastre-se <Link className='link-dark' to='/signup'>aqui</Link> </p>
        </div>
        </>
    );
}

export default Login;