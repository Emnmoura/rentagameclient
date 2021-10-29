import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.config";
import OurGamesCard from "./OurGamesCard";



const OurGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async () => {
        try {
            const result = await api.get('/games')
            setGames({...result.data });
            console.log(result)
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <div className="p-3 row justify-content-center">
        {games && games.map((game) => <OurGamesCard game={game}/>)} 
     </div>
    );
};

export default OurGames;