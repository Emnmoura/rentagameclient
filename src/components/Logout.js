import React, { useState, useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('token')
        window.location = '/'
    }, []);
    return (
        <div></div>
    );
}

export default Logout;