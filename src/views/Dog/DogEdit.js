import { useState, useEffect } from 'react';
import { fetchDogById } from '../../services/dogs';

export default function DogEdit(props) {
  const id = props.match.params.id;
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setName(data.name);
      setBreed(data.breed);
      setImage(data.image);
      setBio(data.bio);
      console.log(data);
    };
    fetchData();
  }, [id]);
  return <div>i am the dog edit component</div>;
}
