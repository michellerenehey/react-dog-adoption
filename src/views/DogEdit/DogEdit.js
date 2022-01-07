import { useState, useEffect } from 'react';
import { fetchDogById, updateDog } from '../../services/dogs';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import './DogEdit.css';

export default function DogEdit(props) {
  const id = props.match.params.id;
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState(null);
  const [buttonClass, setButtonClass] = useState('');

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

  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await updateDog(id, name, breed, image, bio);
      setMessage('Success! Redirecting...');
      setButtonClass('hidden');
      setTimeout(() => {
        history.goBack();
      }, 2500);
    } catch {
      setMessage('Oh no! Something went wrong!');
    }
  };

  return (
    <div>
      {message && <p className="message">{message}</p>}
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
