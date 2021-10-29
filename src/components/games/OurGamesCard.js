import React from "react";
import { Link } from "react-router-dom";

const OurGameCard = ({ game }) => {
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
                    {game.userId === localStorage.getItem("userId") && (
                        <Link
                            className="btn btn-dark w-100 m-1"
                            to={`/game/title/${game._id}`}
                        >
                            testgame1
                        </Link>
                    )}
                    <Link
                        className="btn btn-dark w-100 m-1"
                        to={`/games/${game._id}`}
                    >
                        testgame2
                    </Link>
                </div>
            </div>
        </div>
    </div>
);  

        
   
};

export default OurGameCard;