import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

export default function DataDecors () {
    
    const url = 'https://dummyjson.com/products/'; 
    const [data, setData] = useState([]);
    
    const getData = async () => {
        const res = await fetch(url);
        const dataContent = await res.json();
        //console.log(dataContent);
        setData(dataContent.products);
    }

    useState(() => {
        getData();
    })

    return(
        <>
            <Container>
                <Card style={{ margin: '1rem'}}>
                    <Card.Body>
                        <Card style={{ marginBottom: '1rem'}} className="align-items-center" data-bs-theme="dark">
                            <Card.Title style={{ padding: '1rem'}}>Home Decorations</Card.Title>
                        </Card>
                        <Row>
                        {data.map((dataPlace) => {
                            if (dataPlace.category == 'home-decoration'){
                            return (
                                <Col>
                                    <Card style={{ width: '15rem', height: '35rem', marginBottom: '1rem' }} data-bs-theme="dark">
                                        <Card.Img variant="top" style={{ height: '10rem'}} src={dataPlace.thumbnail}  />
                                        <Card.Body>
                                            <Card.Title>{dataPlace.title}</Card.Title>
                                            <Card.Text>{dataPlace.description}</Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>{dataPlace.brand}</ListGroup.Item>
                                            <ListGroup.Item>Stocks: {dataPlace.stock}</ListGroup.Item>
                                            <ListGroup.Item>${dataPlace.price}</ListGroup.Item>
                                            <ListGroup.Item>★{dataPlace.rating}</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            );}
                        })}
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}