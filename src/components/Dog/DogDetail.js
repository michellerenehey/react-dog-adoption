import React from 'react';

export default function DogDetail({ name, image, breed, bio }) {
  return (
    <div>
      <h3>Meet {name}</h3>
      <img src={image} />
      <p>
        {name} is a(n) {breed}
      </p>
      <p>{bio}</p>
    </div>
  );
}
