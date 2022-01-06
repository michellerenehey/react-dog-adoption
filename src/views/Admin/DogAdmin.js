import { useState } from 'react';
import { addDog } from '../../services/dogs';
import DogForm from '../../components/Dog/DogForm';

export default function DogAdmin() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDog(name, breed, image, bio);
  };
  return (
    <div>
      <DogForm
        name={name}
        setName={setName}
        breed={breed}
        setBreed={setBreed}
        image={image}
        setImage={setImage}
        bio={bio}
        setBio={setBio}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
