import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';

const API_URL = process.env.API_URL || 'http://localhost:5000';

function App() {
  const [searchString, setSearchString] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchString} via UNSPLASH API`);
    fetch(`${API_URL}/new-image?query=${searchString}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: searchString }, ...images]);
      })
      .catch((err) => {
        console.log(`Following error occured: ${err}`);
      });
    setSearchString('');
  };

  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
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
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, index) => (
              <Col key={index} className="pb-3">
                <ImageCard image={image} deleteImage={handleDelete} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
