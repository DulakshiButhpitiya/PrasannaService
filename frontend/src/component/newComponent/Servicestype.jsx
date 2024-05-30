import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Back from '../Assets/back.jpg'

const Servicestype = () => {
  return (
    <div> <div className="d-flex justify-content-around">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Back} />
      <Card.Body>
        <Card.Title>Full Service</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
        <Button variant="primary">Go </Button>
      </Card.Body>
    </Card>
    </div></div>
  )
}

export default Servicestype