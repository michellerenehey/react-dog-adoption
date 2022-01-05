import { useState, useEffect } from 'react';
import { fetchDogById } from '../../services/dogs';

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

  return (
    <div>
      <DogForm name={name} breed={breed} image={image} bio={bio} />
    </div>
  );
}
