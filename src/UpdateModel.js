import React from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { withAuth0 } from '@auth0/auth0-react';

class UpdateModel extends React.Component {

  update = (event) => {
    event.preventDefault();
   console.log ("update")
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.select.value,
      email:this.props.auth0.user.email

    };
    const id = this.props.currentbook._id;
    console.log (obj)
    console.log((id));
    
     this.props.updatebook(obj,id)
    this.props.UpdatehandleClose()
  };




  
  render() {
    const { user } = this.props.auth0;

    return (
      <>
        <Modal show={this.props.updateshow} onHide={this.props.UpdatehandleClose}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{ color: "black", fontSize: "2rem", fontweight: "bold" }}
            >
              {" "}
              Update A New Book 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.update}>
              <Form.Group className="mb-3">
                <Form.Label>Book Titel</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="book title"
                  defaultValue={this.props.currentbook.title}

                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="book description"
                  defaultValue={this.props.currentbook.description}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="select">Status</Form.Label>
                <Form.Select
                  id="select"
                  defaultValue={this.props.currentbook.status}

                  // style={{ fontSize: "25px", textAlign: "center" }}
                >
                  <option>status</option>
                  <option value="life changing">life changing</option>
                  <option value="Favorite Five">Favorite Five</option>
                  <option value="Reccomended To Me">Reccomended To Me</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                update Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.UpdatehandleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(UpdateModel);
