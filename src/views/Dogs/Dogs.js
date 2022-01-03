import { fetchDogs } from '../../services/dogs';
import { useEffect, useState } from 'react';

import DogList from '../../components/Dogs/DogList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {dogs.map((dog) => (
        <DogList key={dog.id} {...dog} />
      ))}
    </div>
  );
}
