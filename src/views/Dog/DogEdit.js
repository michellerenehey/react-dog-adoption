import { useState, useEffect } from 'react';
import { fetchDogById, updateDog } from '../../services/dogs';

import DogForm from '../../components/Dog/DogForm';

export default function DogEdit(props) {
  const id = props.match.params.id;
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setName(data.name);
      setBreed(data.breed);
      setImage(data.image);
      setBio(data.bio);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(id, name, breed, image, bio);
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