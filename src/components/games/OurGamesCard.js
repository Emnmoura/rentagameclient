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
        <div key={game._id} className="card m-1 col-sm-12 col-md-6 col-lg-4">
        <h5 className="card-header">{game.titulo}</h5>
        <div className="card-body d-flex flex-column justify-content-between">
            <p className="card-title">{game.description}</p>
            <div>
                <img
                    src={
                        game.imageUrl ||
                        "![game r](https://user-images.githubusercontent.com/84110651/139341278-93b130e8-b88c-4b00-afa4-c757384fd63b.JPG)"
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
                    <button className='btn btn-dark mt-3' onClick={deletarJogo} >Deletar </button>
                    
                </div>
            </div>
        </div>
    </div>
);  

        
   
};

export default OurGameCard;