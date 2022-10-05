import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import Loader from '../Shared/Loader';
import Team from './Team';
import Teams from '../Teams/Teams'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup);

test('renders the team component successfully', async () => {
    const { findByTestId } = render(
    <MemoryRouter>
       <Teams />
    </MemoryRouter>
   )
    fireEvent.click(await findByTestId('7676a4bf-adfe-415c-941b-1739af07039b'));
    waitFor(async() => {
      const { findByTestId } = render(
        <Team />
      );

    waitFor(async() => {
        const componentReady = await findByTestId('team')
        expect(componentReady).toBeInTheDocument();
        })
    })
  });
