import React from "react";
import { Link } from "react-router-dom";

const ClienteCard = ({ cliente }) => {
    return (
        <div key={cliente._id} className="card m-1 col-sm-12 col-md-6 col-lg-4">
            <h5 className="card-header">{cliente.name}</h5>
            <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-title">{cliente.description}</p>
                <div>
                    <img
                        src={
                            cliente.imageUrl ||
                            ""
                        }
                        className="img-thumbnail"
                    />
                    <div className="d-flex align-items-center">
                        {cliente.userId === localStorage.getItem("userId") && (
                            <Link
                                className="btn btn-dark w-100 m-1"
                                to={`/cliente/form/${cliente._id}`}
                            >
                                Editar
                            </Link>
                        )}
                        <Link
                            className="btn btn-dark w-100 m-1"
                            to={`/clientes/${cliente._id}`}
                        >
                            Detalhes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default clienteCard;