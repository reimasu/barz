import React from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Studio.css';

function Studio() {
    return(
        <div className="d-flex flex-column explore-container ps-5">
        <h3 className='headings pt-3'>Studio</h3>
        <hr/>
        <div className="grid ps-4 pt-3">
            <div className="row">
                <Form>
                    <Row className="mb-3 align-items-end">
                        <Form.Group as={Col} controlId="formGridSongTitle">
                            <Form.Label><p>Song Title</p></Form.Label>
                            <Form.Control type="text" className="sharp-border"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label><p>Album Name</p></Form.Label>
                            <Form.Control type="text" className="sharp-border"/>
                        </Form.Group>
                        <Col xs="auto">
                            <Button type="btn" className="m-0 py-2 studio-button">
                                <p>Create Song</p>
                            </Button>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label><p>Lyrics</p></Form.Label>
                        <Form.Control as="textarea" rows={20} className="sharp-border"/>
                    </Form.Group>
                </Form>
            </div>
        </div>
        </div>
    )
}
export default Studio;