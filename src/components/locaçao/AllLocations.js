import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/api.config'

const AllLocations = () => {
    const { id } = useParams()

    const [locacao, setLocacao] = useState([])

    const getLocacao = async () => {
        try {
            const result = await api.get('/location/all')
            setLocacao(result.data)
        } catch (error) {
        }
    }

    useEffect(() => {
        getLocacao()
    }, [])


    return (<>
        <div className='card w-50 d-flex flex-column justify-content-center'>
        {locacao.map(element => {
            return (
                <div className=' card-body bg-primary d-flex flex-column align-items-center justify-content-center p-5'>
                    {element.clientId && <h5>Cliente:{element.clientId.nome}</h5>}
                    {element.jogoId && <h5>Jogo:{element.jogoId.titulo}</h5>}
                    <h5>Data Locação:{element.dateLocation}</h5>
                </div>
            )
        })}
    </div>
        </>
    )
}

export default AllLocations;