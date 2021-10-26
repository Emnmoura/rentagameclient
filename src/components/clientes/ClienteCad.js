import React from "react";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import api from "../configs/api";


const FORM_VALUES = {
    name: "",
    endereco: "",
    telefone: "",
    cpf: "",
};

const ClienteCad = () => {
    const [formValues, setFormValues] = useState({ ...FORM_VALUES })

    const history = useHistory()

    const handleChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = async =(e) => {
        e.preventDefault()
        try{
            const result = await api.post('/', formValues)
            history.push('/')
        } catch (error){

        }
    }

    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit}>
            <label > Nome:</label>
            <imput
                className='form-control'
                type="text"
                name='name'
                value={formValues.name}
                onChange={handleChange}
            />

            <label > Endereço:</label>
            <imput
                className='form-control'
                type="text"
                name='endereco'
                value={formValues.name}
                onChange={handleChange}
            />

            <label > Telefone:</label>
            <imput
                className='form-control'
                type="text"
                name='telefone'
                value={formValues.name}
                onChange={handleChange}
            />

            <label > CPF:</label>
            <imput
                className='form-control'
                type="text"
                name='cpf'
                value={formValues.name}
                onChange={handleChange}
            />

            <button type='submit' className='btn btn-secondary m-3'>Cadastrar</button>
            </form>
        </div>
    )
};

export default ClienteCad;