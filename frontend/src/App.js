import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

function App() {
  const [searchString, setSearchString] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchString} via UNSPLASH API`);
    fetch(
      `${UNSPLASH_API_URL}/photos/random?query=${searchString}&client_id=${UNSPLASH_ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: searchString }, ...images]);
      })
      .catch((err) => {
        console.log(`Following error occured: ${err}`);
      });
    setSearchString('');
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        searchString={searchString}
        setSearchString={setSearchString}
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col key={index} className="pb-3">
              <ImageCard image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
