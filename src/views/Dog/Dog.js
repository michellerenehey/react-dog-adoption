import { deleteDog, fetchDogById } from '../../services/dogs';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import DogDetail from '../../components/Dog/DogDetail';

export default function Dog(props) {
  const id = props.match.params.id;
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const history = useHistory();

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await deleteDog(id);
      history.push('/');
    } catch {
      setMessage('Oh no! Something went wrong!');
    }
  };

  return (
    <div>
      {loading ? (
        <p>...page is loading</p>
      ) : (
        <DogDetail {...dog} handleDelete={handleDelete} message={message} />
      )}
    </div>
  );
}
