import './DogDetail.css';
import { Link } from 'react-router-dom';

export default function DogDetail({ id, name, image, breed, bio, handleDelete }) {
  return (
    <div className="dog-detail">
      <h3>Meet {name}</h3>
      <img src={image} />
      <p>
        {name} is a(n) {breed}
      </p>
      <p>{bio}</p>
      <button>
        <Link to={`/dogs/${id}/edit`}>Edit</Link>
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
