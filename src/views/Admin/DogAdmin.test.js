import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogAdmin from './DogAdmin';

test('should render the dog form with admin access', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogAdmin />
    </MemoryRouter>
  );
  await screen.findByText('Dog Name:');
  expect(container).toMatchSnapshot();
});
