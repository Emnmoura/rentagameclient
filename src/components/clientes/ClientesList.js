import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.config";
import ClientesCard from "./ClientesCard";



const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        getClientes();
    }, []);

    const getClientes = async () => {
        try {
            const result = await api.get("/client/all")
            setClientes([...result.data ]);
            
        } catch (error) {

        }
    };

    return (
        <div className="p-3 row justify-content-center">
            {clientes && clientes.map((cliente) => <ClientesCard cliente={cliente} getClientes={getClientes}/>)} 
         </div>
    );
};

export default ClientesList;