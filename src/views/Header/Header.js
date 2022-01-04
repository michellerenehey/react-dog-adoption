import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to={'/dogs'} className="headerStyle">
        HOME
      </Link>
    </header>
  );
}
