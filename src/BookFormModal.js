import React from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class BookFormModal extends React.Component {

  addbooks = (event) => {
    event.preventDefault();

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.select.value,
    };
    console.log((obj));
     this.props.postBook(obj)
    this.props.handleClose()
  };




  
  render() {
    return (
      <>
        <Modal show={this.props.setshow} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{ color: "black", fontSize: "2rem", fontweight: "bold" }}
            >
              {" "}
              Add A New Book To Favorites
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.addbooks}>
              <Form.Group className="mb-3">
                <Form.Label>Book Titel</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="book title"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="book description"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="select">Status</Form.Label>
                <Form.Select
                  id="select"
                  // style={{ fontSize: "25px", textAlign: "center" }}
                >
                  <option>status</option>
                  <option value="life changing">life changing</option>
                  <option value="Favorite Five">Favorite Five</option>
                  <option value="Reccomended To Me">Reccomended To Me</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add New Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
