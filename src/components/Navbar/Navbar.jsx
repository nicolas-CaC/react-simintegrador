import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {

    const opciones = ['Inicio', 'Perfil', 'Contacto']
    const [active, setActive] = useState(window.location.pathname)

    function activeLink(opcion) {
        const rutaActual = `/${opcion.toLowerCase()}`
        return active === rutaActual
            ? 'fw-bold'
            : null
    }

    function handleClick(opcion) {
        const rutaActual = `/${opcion.toLowerCase()}`
        setActive(rutaActual)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary w-100 position-fixed top-0">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Mi sitio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        { opciones.map(opcion =>
                            <Link
                                key={ opcion }
                                className={ `nav-link link-light ${activeLink(opcion)}` }
                                to={ opcion.toLowerCase() }
                                onClick={ () => handleClick(opcion) }
                            >{ opcion }
                            </Link>
                        ) }




                    </div>
                </div>
            </div>
        </nav>
    )
}