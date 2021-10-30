import React from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.config";

const ClientesCard = ({ cliente, getClientes }) => {
    const deletarCliente = async () => {
        try {
            //await api.delete(`/client/${cliente._id}`)
            //getClientes()
            alert("goiaba")
        } catch (error) {
            console.log(error.response)

        }

    }

    return (
        <div key={cliente._id} className="card m-1 col-sm-12 col-md-6 col-lg-4">
            <h5 className="card-header">{cliente.nome}</h5>
            <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-title">{cliente.description}</p>
                <div>
                    <img
                        src={
                            cliente.imageUrl ||
                            "![game r](https://user-images.githubusercontent.com/84110651/139341278-93b130e8-b88c-4b00-afa4-c757384fd63b.JPG)"
                        }
                        className="img-thumbnail"
                    />
                    <div className="d-flex align-items-center">
                        {cliente.userId === localStorage.getItem("userId") && (
                            <Link
                                className="btn btn-dark w-100 m-1"
                                to={`/cliente/nome/${cliente._id}`}
                            >
                                test1
                            </Link>
                        )}
                        <Link
                            className="btn btn-dark w-100 m-1"
                            to={`/clientes/${cliente._id}`}
                        >
                            test2
                        </Link>
                        <button className='btn btn-dark mt-3' onClick={deletarCliente} >Deletar </button>
                    </div>
                </div>
            </div>
        </div>
    );



};

export default ClientesCard;