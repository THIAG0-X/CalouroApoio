import { Link } from "react-router-dom"
import '../Navbar/Navbar.css'

function Navbar({menuActive}) {
    return (
        <nav className="navbar">
            <ul className={`itens_navbar ${menuActive ? 'itens_navbar-active' : ''}`}>
                <li><Link to="/" className="link">Início</Link></li>
                <li><Link to="/VidaAcademica" className="link">Vida Academica</Link></li>
                <li><Link to="/OportunidadesBeneficios" className="link">Oportunidades e Benefícios</Link></li>
                <li><Link to="/ApoioPsicologico" className="link">Apoio Psicológico</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar