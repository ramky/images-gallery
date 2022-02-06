import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Search = ({ handleSubmit, searchString, setSearchString }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  placeholder="Search for new image ..."
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)} >
                </Form.Control>
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Search