import DisplaySimpson from './components/DisplaySimpson';
import { useState } from 'react';
import './App.css';

const endpoint = 'https://simpsons-quotes-api.herokuapp.com/quotes';

const dummyData = {
  quote: 'I believe the children are the future... Unless we stop them now!',
  character: 'Homer Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  characterDirection: 'Right',
};

export default function App() {
  const [quote, setQuote] = useState(dummyData);

  // * Using the default fetch method
  const getQuote = () =>
    fetch(endpoint)
      .then(res => res.json())
      .then(quoteList => setQuote(quoteList[0]))
      .catch(err => console.log(err));

  return (
    <>
      <DisplaySimpson quote={quote} />
      <button type='button' onClick={getQuote}>
        Get a Simpson's quote
      </button>
    </>
  );
}
