import React, { useState } from 'react';

const INITIAL_FORM = {
    username: "",
    password: ""
}

const Signup = () => {
    const [formValues, setFormValues] = useState({ ...INITIAL_FORM })

    const handleChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <div>
            <form className='d-flex vh-100 flex-column align-items-center justify-content-center'>
                <label>Usuário:</label>
                <input className='form-control w-25' type="text" name='username' value={formValues.username} onChange={handleChange} />

                <label>Senha:</label>
                <input className='form-control w-25' type="password" name='password' value={formValues.password} onChange={handleChange} />
            </form>
            <button className='btn btn-dark mt-3' >Signup</button>
        </div>
    );
}

export default Signup;