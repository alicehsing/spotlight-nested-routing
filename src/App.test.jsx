import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  it('renders a header component', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Find and check for an <h1> element "Rick and Morty Character Wiki"
    screen.getByText(/Rick and Morty Character Wiki/i);
  });

  it('on click of View Characters link, renders character list view beneath header', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );

    // Find clickable "View Characters" link and click
    const characterList = await screen.findByText('View Characters');
    userEvent.click(characterList);

    // On click, Find an element with the text of "Loading..."
    screen.getByText(/loading/i);
    await waitForElementToBeRemoved(await screen.findByText(/loading/i));

    // on click, find and check for a list of characters
    await screen.findByText('Rick Sanchez');
    await screen.findByText('Beth Smith');
    await screen.findByText('Antenna Morty');
  });

  it('on click of a character, renders a character detail consisted of name, image and species', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );
    // Find clickable character "Rick Sanchez" and click
    const character = await screen.findByText('Rick Sanchez');
    userEvent.click(character);

    // Find and check for image alt text of 'Rick Sanchez'
    const image = await screen.findByAltText('Rick Sanchez');
    const species = await screen.findByText('Species: Human');
    expect(image).toBeInTheDocument();
    expect(species).toBeInTheDocument();
  });
});
