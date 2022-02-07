import {useState} from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header"
import Search from "./components/Search"

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

function App() {
  const [searchString, setSearchString] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchString} via UNSPLASH API`);
    fetch(`${UNSPLASH_API_URL}/photos/random?query=${searchString}&client_id=${UNSPLASH_ACCESS_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(`Following error occured: ${err}`);
      });
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search searchString={searchString} setSearchString={setSearchString} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
