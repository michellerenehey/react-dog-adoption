import { Link } from 'react-router-dom';
import './DogList.css';

export default function DogsList({ id, name, breed, image }) {
  return (
    <div className="dog-card">
      <Link to={`/dogs/${id}`} className="dog-list">
        <h3>Meet {name}</h3>
        <img src={image} />
        <p className="dog-card-p">
          {name} is a(n) {breed}
        </p>
      </Link>
    </div>
  );
}
