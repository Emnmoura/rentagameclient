import React from "react";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import api from "../../api/api.config";

const FORM_VALUES = {
    titulo: "",
    genero: "",
    descricao: "",
    preco: "",
    quantidade: "",
};

const NewGame = () => {
    const [formValues, setFormValues] = useState({ ...FORM_VALUES })

    const history = useHistory()

    const handleChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const result = await api.post('/jogos/new', formValues)
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
            <label > Título:</label>
            <input
                className='form-control'
                type="text"
                name='titulo'
                value={formValues.titulo}
                onChange={handleChange}
            
            />

            <label > Gênero:</label>
            <input
                className='form-control'
                type="text"
                name='genero'
                value={formValues.genero}
                onChange={handleChange}
            />
            
            <label > Descrição:</label>
            <input
                className='form-control'
                type="text"
                name='descricao'
                value={formValues.descricao}
                onChange={handleChange}
            />


            <label > Preço:</label>
            <input
                className="form-control"
                type="number"
                name='preco'
                value={formValues.preco}
                onChange={handleChange}
            />
            
            <label > Quantidade:</label>
            <input
                className="form-control"
                type="number"
                name='quantidade'
                value={formValues.quantidade}
                onChange={handleChange}
            />

            <button type='submit' className='btn btn-secondary m-3'>Cadastrar</button>
            </form>
        </div>
        </div>
        </div>

    )
};

export default NewGame;