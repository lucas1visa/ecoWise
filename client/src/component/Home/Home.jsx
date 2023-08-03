import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import MPButton from '../MPButton/MPButton';
import styles from "./home.module.css"

const Home = () => {
  const products = useSelector((state) => state.products);
  const user = {email: "visalucas558@gmail.com",name:"lucas julian visa", surname:"lucasVisa"}
  return (
    <Container className='container'>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="mb-4">
              <Link to={`/products/${product.id}`}>
                <Card.Img variant="top" src={product.image} alt={product.name} />
              </Link>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: ${product.price} 
                  {/* <MPButton product={product} user={user}>Pagar</MPButton> */}
                </Card.Text>

                <Link to={`/products/${product.id}`}>
                  <Button variant="primary">Ver detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
