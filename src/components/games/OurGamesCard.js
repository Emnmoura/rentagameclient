import React from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.config";

const OurGameCard = ({ game, getGames }) => {
    const deletarJogo = async () => {
        try {
             await api.delete(`/game/${game._id}`)
            getGames()
        } catch (error) {
            console.log(error.response)
            
        }


    }
    return (
        <div key={game._id} className="card bg-ligth m-1 col-sm-12 col-md-6 col-lg-4">
        <h5 className="card-header">{game.titulo}</h5>
        <div className="card-body d-flex flex-column justify-content-between">
            <p className="card-title">{game.description}</p>
            <div>
                <img
                    src={
                        game.imageUrl ||
                        "https://user-images.githubusercontent.com/84294089/139518901-a7104004-87cb-48a6-9f29-f39812ed1423.jpg"
                    }
                    className="img-thumbnail"
                />
                <div className="d-flex align-items-center">
                    <Link
                        className="btn btn-dark w-100 m-1"
                        to={`/jogo/${game._id}`}
                    >
                        detalhes
                    </Link>
                    <button className='btn btn-dark mt-0' onClick={deletarJogo} >Deletar </button>
                    
                </div>
            </div>
        </div>
    </div>
);  

        
   
};

export default OurGameCard;