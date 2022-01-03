import { fetchDogById } from '../../services/dogs';
import { useEffect, useState } from 'react';

import DogDetail from '../../components/Dog/DogDetail';

export default function Dog(props) {
  const id = props.match.params.id;
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      console.log(data);
    };
    fetchData();
  }, [id]);

  return <DogDetail {...dog} />;
}
