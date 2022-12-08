import {Card,Col, Row, Button } from "react-bootstrap";

const Products = ({ data }) => {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {data.map((item) => {
          return (
            <Col>
              <Card>
                <Card.Img variant="top" src={item.recipe.image} width="200px" height="200px" />
                <Card.Body>
                  <Card.Title>Item - {(item.recipe.label).substr(0,19)}</Card.Title>
                  <Card.Text>
                    Calories : {Math.round (item.recipe.calories)}
                  </Card.Text>
                </Card.Body>
                <Button className="bg-dark">Order Now</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
