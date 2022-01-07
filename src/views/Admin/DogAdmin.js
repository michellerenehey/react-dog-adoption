import { useState } from 'react';
import { addDog } from '../../services/dogs';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import './DogAdmin.css';

export default function DogAdmin() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState('');
  const [buttonClass, setButtonClass] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await addDog(name, breed, image, bio);
      setMessage('Success! Redirecting...');
      setButtonClass('hidden');
      setTimeout(() => {
        history.push(`/dogs/${data[0].id}`);
      }, 2500);
    } catch {
      setMessage('Oops! Something went wrong!');
    }
  };
  return (
    <div>
      <p className="message">{message}</p>
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
        buttonClass={buttonClass}
      />
    </div>
  );
}
