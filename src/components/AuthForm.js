import React from 'react';

const AuthForm = ( { values, handleSubmit, handleChange, buttonLabel } ) => {
    return (
        <form 
            onSubmit = { handleSubmit } 
            className="d-flex flex-column text-dark fw-bold"
        >
                <label >Usuário:</label>
                <input 
                    className="form-control my-2" 
                    type="text" 
                    name="username" 
                    onChange={handleChange} 
                />

                <label >Senha:</label>
                <input 
                    className="form-control my-2" 
                    type="password" 
                    name="password"  
                    onChange={handleChange} 
                />
            <button className="btn btn-secondary mt-3">{buttonLabel}</button>
        </form>
    );
};

export default AuthForm;