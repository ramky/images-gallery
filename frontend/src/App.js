import {useState} from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header"
import Search from "./components/Search"


function App() {
  const [searchString, setSearchString] = useState('');

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
