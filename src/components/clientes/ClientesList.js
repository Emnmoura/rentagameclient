import React, { useState, useEffect } from "react";
import api from "../../api/api.config";



const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        getClientes();
    }, []);

    const getClientes = async () => {
        try {
            const result = await api.get("/clientes/all")
            setClientes({ ...result.data });

        } catch (error) {
            console.error(error.response);
        }
    };


    return (
        <div className="p-3 row justify-content-center">
            {clientes && clientes.map((cliente) => <div>{cliente.nome}</div>)} {/*Clientecard no lugar da div */}
         </div>
    );
};

export default ClientesList;