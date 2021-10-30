import React from "react";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import api from "../../api/api.config";


const NewLocation = () => {
    const [jogoId, setJogoId] = useState()
    const [clientId, setClientId] = useState()
    const [dateLocation, setDateLocation] = useState()
    const [allgames, setAllGames] = useState()
    const [allclients, setAllClients] = useState()

    let history = useHistory()

    const getData = async () => {
        const clients = await getClientes()
        const games = await getGames()
        setAllGames(games)
        setAllClients(clients)

    } 

    const getClientes = async () => {
        try {
            const result = await api.get("/client/all")
            console.log(result.data)
            return result.data 
            
        } catch (error) {

        }
    };

    const getGames = async() => {
        try {
            const result = await api.get('/game/all')
           return result.data
        } catch (error) {            
        }
    }

    useEffect( () => {
        getData()
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        console.log(name,value)
        if(name === "client") {
            setClientId(value)
        }else if (name === "game"){
            setJogoId(value)
        }else{
            setDateLocation(value)
        }

       };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await api.post('/location/new', {jogoId,clientId,dateLocation})
            history.push('/locacoes/all')
        } catch (error) {

        }
    }

    return (<>{allclients && 
        <div className='bg-primary d-flex flex-column align-items-center justify-content-center p-5'>
            <div className='card w-50 m-1'>
                <h3 className='card-header'>Preencha os campos</h3>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label > Cliente:</label>
                        <select
                            className='form-control'
                            type="text"
                            name='client'
                            // value={}
                            onChange={handleChange}

                        >
                           <option value = {"null"}> Selecione um cliente</option>
                            {allclients.map(client => <option value = {client._id}> {client.nome}</option>)} 
                            </select>

                        <label > Jogo:</label>
                        <select
                            className='form-control'
                            type="text"
                            name='game'
                            // value={}
                            onChange={handleChange}

                        > 
                        <option value = {"null"}> Selecione um jogo</option>
                        {allgames.map(game => <option value = {game._id}> {game.titulo}</option>)}
                        </select>

                        <label >Data Locação:</label>
                        <input
                            className='form-control'
                            type="text"
                            name='Data'
                            value={dateLocation}
                            onChange={handleChange}
                        />

                        
                        <button type='submit' className='btn btn-secondary m-3'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    }
</>
    )
};

export default NewLocation;