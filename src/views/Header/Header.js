import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={'/dogs'}>HOME</Link>
    </header>
  );
}
