import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/api.config'

const ViewLocation = () => {
    const {id} = useParams()

    const [locaçao, setLocaçao] = useState({})

    const getLocaçao = async() => {
        try {
            const result = await api.get(`/game/${id}`)
            setLocaçao(result.data)
        } catch (error) {            
        }
    }

    useEffect(() => {
        getLocaçao()
    }, [])


    return(
        <div className=' card bg-primary d-flex flex-column align-items-center justify-content-center p-5'>
           <h5>Cliente:{location.clientId}</h5>
           <h5>Jogo:{location.jogoId}</h5>
           
           
        </div>
    )
}

export default ViewGame;