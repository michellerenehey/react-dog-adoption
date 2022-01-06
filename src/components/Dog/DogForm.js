import './DogForm.css';

export default function DogForm({
  name,
  setName,
  breed,
  setBreed,
  image,
  setImage,
  bio,
  setBio,
  handleSubmit,
}) {
  return (
    <div className="dog-form-div">
      <form className="dog-form">
        <label className="form-detail">Dog Name:</label>
        <input
          className="form-detail"
          placeholder="enter name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label>Dog Breed:</label>
        <input
          placeholder="enter breed"
          type="text"
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
        <label>Image Link:</label>
        <input
          placeholder="enter image url"
          type="text"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <label>Dog Bio:</label>
        <textarea
          className="dog-bio"
          placeholder="enter bio"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
