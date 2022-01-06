import { useState } from 'react';
import { addDog } from '../../services/dogs';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/Dog/DogForm';

export default function DogAdmin() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addDog(name, breed, image, bio);
    history.push(`/dogs/${data[0].id}`);
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
