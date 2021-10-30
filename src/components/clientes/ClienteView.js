import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/api.config'

const ClienteView = () => {
    const {clientId} = useParams()

    const [cliente, setCliente] = useState({})

    const getCliente = async() => {
        try {
            const result = await api.get(`/client/${clientId}`)
            setCliente(result.data)
        } catch (error) {            
        }
    }

    useEffect(() => {
        getCliente()
    }, [])


    return(
        <div className=' card bg-primary d-flex flex-column align-items-center justify-content-center p-5'>
           <h5>Nome:{cliente.nome}</h5>
           <h5>Endereço:{cliente.endereco}</h5>
           <h5>Telefone:{cliente.telefone}</h5>
           <h5>CPF:{cliente.cpf}</h5>
           
        </div>
    )
}

export default ClienteView