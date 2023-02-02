import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const Contacto = () => {
    return (
        <div className='contenedor-contacto'>
            <div className='contenedor'>
                <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
            </div>
            <div className='contenedor-form'>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>
            <Button variant="dark" type="submit">
                Enviar
            </Button>

        </div>

    )
}

export default Contacto