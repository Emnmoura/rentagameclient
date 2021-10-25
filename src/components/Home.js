import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='p-5 bg-primary d-flex'>
        <div className='card w-50 m-1'>          
          <h3 className='card-header'>Clientes</h3>
          <div className='card-body'>
          <img className='img-thumbnail'
          src="https://user-images.githubusercontent.com/84294089/138571399-90f21de9-874e-4ece-ae62-dfd8d3622460.png"
           alt=''/>
            <Link to='cliente/all'><button className='btn btn-secondary m-3'>Nossos Clientes</button></Link>
            <Link to='cliente/new'><button className='btn btn-secondary m-3'>Cadastrar Cliente</button></Link>                     
          </div>
        </div>

        <div className='card w-50 m-1'>          
          <h3 className='card-header'>Jogos</h3>
          <div className='card-body'>
          <img className='img-thumbnail'
          src="https://user-images.githubusercontent.com/84294089/138574387-724515eb-f1b8-4bb0-8f72-05c553f1a9ab.jpg"
           alt=''/>
            <Link to='jogos/all'><button className='btn btn-secondary m-3'>Nossos Jogos</button></Link>
            <Link to='jogos/new'><button className='btn btn-secondary m-3'>Cadastrar Jogo</button></Link>                         
          </div>
        </div>

        <div className='card w-50 m-1'>          
          <h3 className='card-header'>Locações</h3>
          <div className='card-body'>
          <img className='img-thumbnail h-75'
          src="https://user-images.githubusercontent.com/84294089/138574527-3341ea78-1efd-42bc-9c70-0d98b73a3c07.jpg"
           alt=''/>
            <Link to='locacoes/all'><button className='btn btn-secondary m-3'>Locações</button></Link>
            <Link to='locacoes/new'><button className='btn btn-secondary m-3'>Criar Locação</button></Link>                         
          </div>
        </div>

      </div>

    </>
  )
}


export default Home;