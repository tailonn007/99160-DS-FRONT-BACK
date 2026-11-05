import './styles.css';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span>Contabilidade Simples</span>
        </Link>
      </div>
      <nav>
        <NavLink to="/sobre-nos">Sobre Nós</NavLink>
        <NavLink to="/fale-conosco">Fale Conosco</NavLink>
      </nav>
    </header>
  );
}