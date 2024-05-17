import React from 'react';
import { Carrito } from './Carrito';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="/src/img/logo (1).png" alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="nav-opcion" href="#">Audio y Sonido</a></li>
                                <li><a className="nav-opcion" href="#">Amplificadores</a></li>
                                <li><a className="nav-opcion" href="#">Instrumentos</a></li>
                                <li><a className="nav-opcion" href="#">Producción</a></li>
                                <li><a className="nav-opcion" href="#">Grabación</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">
                            <img src="/src/img/lupa-blanca.png" alt="Buscar" className="lupa" />
                        </button>
                    </form>
                </div>
                <Carrito/>
            </div>
        </nav>
    );
};

