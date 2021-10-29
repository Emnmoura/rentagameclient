import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/api.config'

const ViewGame = () => {
    const {id} = useParams()

    const [game, setGame] = useState({})

    const getGame = async() => {
        try {
            const result = await api.get(`/game/${id}`)
            setGame(result.data)
        } catch (error) {            
        }
    }

    useEffect(() => {
        getGame()
    }, [])


    return(
        <div className=' card bg-primary d-flex flex-column align-items-center justify-content-center p-5'>
           <h5>Título:{game.title}</h5>
           <h5>Genero:{game.genero}</h5>
           <h5>Descrição:{game.descricao}</h5>
           <h5>Preço:{game.preco}</h5>
           <h5>Quantidade: {game.quantidade}</h5>
           <button className='btn btn-dark mt-3'>Editar</button>
        </div>
    )
}

export default ViewGame;