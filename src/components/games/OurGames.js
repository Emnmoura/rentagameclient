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
            const result = await api.get('/game/all')
            console.log(result)
            setGames([...result.data]);
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
<>
        
        <div className="p-3 bg-primary row justify-content-center">
            {games && games.map((game) => <OurGamesCard game={game} getGames={getGames} />)}
        </div>
</>
    );
};

export default OurGames;