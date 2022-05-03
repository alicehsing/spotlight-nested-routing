import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  it('renders a list of clickable characters on list view, on click, navigates to the character detail view', async () => {
    // Render the app to the "screen"
    render(
      //initialEntries
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    // Find an element with the text of "Loading..."
    screen.getByText(/loading/i);
    await waitForElementToBeRemoved(await screen.findByText(/loading/i));

    // Find and check for clickable rendered character 'Rick Sanchez'
    const characterLink = await screen.findByText('Rick Sanchez');
    userEvent.click(characterLink);

    // on click, find and check for image of Rick Sanchez rendered on detail page
    await screen.findByAltText('Rick Sanchez');
  });

  it("renders character Rick Sanchez's name, species, status, location and gender", async () => {
    // Render the app to the "screen"
    render(
      //<MemoryRouter> supports the initialEntries props, so you can boot up an app (or any smaller part of an app) at a specific location.
      <MemoryRouter initialEntries={['/characters/1']}>
        <App />
      </MemoryRouter>
    );

    // Find an element with the text of "Loading..."
    screen.getByText('Loading character...');
    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    // Find and check for image alt text of 'Rick Sanchez'
    const image = await screen.findByAltText('Rick Sanchez');
    expect(image).toBeInTheDocument();
  });
});
