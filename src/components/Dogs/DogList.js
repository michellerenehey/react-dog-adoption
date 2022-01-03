import { Link } from 'react-router-dom';

export default function DogsList({ id, name, breed, image }) {
  return (
    <Link to={`/dogs/${id}`}>
      <h3>Meet {name}</h3>
      <img src={image} />
      <p>
        {name} is a(n) {breed}
      </p>
    </Link>
  );
}
