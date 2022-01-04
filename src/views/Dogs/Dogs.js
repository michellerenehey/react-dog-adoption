import { fetchDogs } from '../../services/dogs';
import { useEffect, useState } from 'react';

import DogList from '../../components/Dogs/DogList';
import './Dogs.css';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>...page is loading</p>
      ) : (
        <div className="dogs-style">
          {dogs.map((dog) => (
            <DogList key={dog.id} {...dog} />
          ))}
        </div>
      )}
    </div>
  );
}
