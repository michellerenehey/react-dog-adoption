import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogEdit from './DogEdit';

test('should render the DogEdit component', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogEdit match={{ params: { id: 3 } }} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Poppy');
  expect(container).toMatchSnapshot();
});
