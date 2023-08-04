//import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../CardProducts/CardProducts.css'

const CardProducts = () => {
  


  const products = useSelector((state) => {
    if (state.products.length > 0) {
     return state.products
   } else {
     return state.products;
   }})
    return (
        <div>
     <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="mb-4">
              <Link to={`/product/${product.id}`}>
                <Card.Img variant="top" src={product.image} alt={product.name} id='image-Products'/>
              </Link>
              <Card.Body>b
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: ${product.price} 
                </Card.Text>

                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">Ver detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container> 
        </div>
    )
}
 
export default CardProducts;