import {useState} from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header"
import Search from "./components/Search"


function App() {
  const [searchString, setSearchString] = useState('');

  const UNSPLASH_ACCESS_KEY = process.key.REACT_APP_UNSPLASH_ACCESS_KEY;
  const UNSPLASH_SECRET_KEY = process.key.REACT_APP_UNSPLASH_SECRET_KEY;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchString);
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search searchString={searchString} setSearchString={setSearchString} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
