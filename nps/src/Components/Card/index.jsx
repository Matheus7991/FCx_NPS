import React from "react";
import { Card, Container } from "react-bootstrap";

import Form from '../Form';

const index = () => {
  return (
    <Container>
        <Card>
            <Card.Header as="h5">Olá, tudo bem?! Nos ajude a melhorar</Card.Header>
            <Card.Body>
                <Form />
            </Card.Body>
        </Card>
    </Container>
  );
};

export default index;
