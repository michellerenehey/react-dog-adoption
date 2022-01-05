import React from 'react';

export default function DogForm({ name, setName, breed, setBreed, image, setImage, bio, setBio }) {
  return (
    <div>
      <form>
        <label>Dog Name:</label>
        <input
          placeholder="enter name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
          placeholder="enter breed"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        />
        <button>Update Doggy</button>
      </form>
    </div>
  );
}
