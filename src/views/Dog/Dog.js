import { fetchDogById } from '../../services/dogs';
import { useEffect, useState } from 'react';

import DogDetail from '../../components/Dog/DogDetail';

export default function Dog(props) {
  const id = props.match.params.id;
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return <div>{loading ? <p>...page is loading</p> : <DogDetail {...dog} />}</div>;
}
