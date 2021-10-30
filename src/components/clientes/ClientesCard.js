import React from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.config";

const ClientesCard = ({ cliente, getClientes }) => {
    const deletarCliente = async () => {
        try {
            await api.delete(`/client/${cliente._id}`)
            getClientes()
            
        } catch (error) {
            console.log(error.response)

        }

    }

    return (
        <div key={cliente._id} className="card  m-1 col-sm-12 col-md-6 col-lg-4">
            <h5 className="card-header">{cliente.nome}</h5>
            <div className="card-body">
                <p className="card-title">{cliente.description}</p>
                <div className=' d-flex flex-column align-items-center'>
                    <img 
                        src={
                            cliente.imageUrl ||
                            "https://user-images.githubusercontent.com/84294089/139517444-118cf5a2-072a-4f38-be73-2a6d0cf46b5f.jpg"
                        }
                        className="img-thumbnail w-50"
                    />
                    
                        {cliente.userId === localStorage.getItem("userId") && (
                            <Link
                                className="btn btn-dark w-100 m-1"
                                to={`/cliente/nome/${cliente._id}`}
                            >
                                
                            </Link>
                        )}
                        <Link
                            className="btn btn-dark w-25 m-1"
                            to={`/cliente/${cliente._id}`}
                        >
                            Detalhes
                        </Link>
                        <button className='btn btn-danger w-25 mt-0 ' onClick={deletarCliente} >Deletar </button>
                    
                </div>
            </div>
        </div>
    );



};

export default ClientesCard;