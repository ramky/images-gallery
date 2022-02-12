import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div class="container-fluid bg-light text-dark p-5">
      <div class="container bg-light p-5">
        <h1 class="display-4 fw-bold">Images Gallery</h1>
        <hr />
        <p>
          {' '}
          This is a simple application that retrieves images from Unspash API.
          To start please enter a search term.
        </p>
        <Button variant="primary" target="_blank" href="https://unsplash.com">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
