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

export async function addDog(name, breed, image, bio) {
  const response = await client.from('dogs').insert({ name, breed, image, bio });
  return checkError(response);
}

export async function deleteDog(id) {
  const response = await client.from('dogs').delete().match({ id });
  return checkError(response);
}
