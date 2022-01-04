import './DogDetail.css';

export default function DogDetail({ name, image, breed, bio }) {
  return (
    <div className="dog-detail">
      <h3>Meet {name}</h3>
      <img src={image} />
      <p>
        {name} is a(n) {breed}
      </p>
      <p>{bio}</p>
    </div>
  );
}
