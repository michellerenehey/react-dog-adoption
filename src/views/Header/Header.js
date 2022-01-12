import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/" className="headerStyle">
        HOME
      </Link>
      <Link to="/admin" className="headerStyle">
        ADMIN
      </Link>
    </header>
  );
}
