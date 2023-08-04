import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../CardProducts/CardProducts.css';
import Paginado from '../Paginado/Paginado'; // Asegúrate de que la ruta sea correcta.

const CardProducts = () => {
  const [currentPage, setCurrentPage] = useState([1]);
  const productsPerPage = 5;

  const products = useSelector((state) => state.products);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Si cambia la lista de pokémones en el estado redux, reseteamos la página actual a la primera
    setCurrentPage(1);
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);



  return (



    <div>

      <Paginado
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />


      <Container>
        <Row>
          {currentProducts.map((product) => (
            <Col key={product.id} md={4}>
              <Card className="mb-4">
                <Link to={`/product/${product.id}`}>
                  <Card.Img variant="top" src={product.image} alt={product.name} id='image-Products' />
                </Link>
                <Card.Body>
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
  );
};

export default CardProducts;