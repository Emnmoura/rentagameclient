import React from "react";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import api from "../../api/api.config";


const FORM_VALUES = {
    nome: "",
    endereco: "",
    telefone: "",
    cpf: "",
};

const ClienteNovo = () => {
    const [formValues, setFormValues] = useState({ ...FORM_VALUES })

    const history = useHistory()

    const handleChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const result = await api.post('/cliente/new', formValues)
            history.push('/')
        } catch (error){

        }
    }

    return (
        <div className='bg-primary d-flex flex-column align-items-center justify-content-center p-5'>
        <div className='card w-50 m-1'>
        <h3 className='card-header'>Preencha os campos</h3>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
            <label > Nome:</label>
            <input
                className='form-control'
                type="text"
                name='nome'
                value={formValues.nome}
                onChange={handleChange}
            
            />

            <label > Endereço:</label>
            <input
                className='form-control'
                type="text"
                name='endereco'
                value={formValues.endereco}
                onChange={handleChange}
            />

            <label > Telefone:</label>
            <input
                className='form-control'
                type="text"
                name='telefone'
                value={formValues.telefone}
                onChange={handleChange}
            />

            <label > CPF:</label>
            <input
                className="form-control"
                type="number"
                name='cpf'
                value={formValues.cpf}
                onChange={handleChange}
            />
            <button type='submit' className='btn btn-secondary m-3'>Cadastrar</button>
            </form>
        </div>
        </div>
        </div>

    )
};

export default ClienteNovo;