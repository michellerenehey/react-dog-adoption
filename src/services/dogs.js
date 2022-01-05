import { checkError, client } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select('*').order('name');
  return checkError(response);
}

export async function fetchDogById(id) {
  const response = await client.from('dogs').select('*').match({ id }).single();
  return checkError(response);
}

export async function updateDog(id, name, breed, image, bio) {
  const response = await client.from('dogs').update({ name, breed, image, bio }).eq('id', id);
  return checkError(response);
}
