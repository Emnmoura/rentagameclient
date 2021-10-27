import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/api.config'

const ClienteView = () => {
    const {cpf} = useParams()

    const [cliente, setCliente] = useState({})

    const getCliente = async() => {
        try {
            const result = await api.get(`/cliente/${cpf}`)
            setCliente(result.data)
        } catch (error) {            
        }
    }

    useEffect(() => {
        getCliente()
    }, [])


    return(
        <div className=' card bg-primary d-flex flex-column align-items-center justify-content-center p-5'>
           <h5>{cliente.nome}</h5>
           <h5>{cliente.endereco}</h5>
           <h5>{cliente.telefone}</h5>
           <h5>{cliente.cpf}</h5>
           <button className='btn btn-dark mt-3'>Editar</button>
        </div>
    )
}

export default ClienteView