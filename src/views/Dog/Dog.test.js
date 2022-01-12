import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dog from './Dog';

test("should render a dog's details", async () => {
  const { container } = render(
    <MemoryRouter>
      <Dog match={{ params: { id: 3 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Meet Poppy');
  expect(container).toMatchSnapshot();
});
