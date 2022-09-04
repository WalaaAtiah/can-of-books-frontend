import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "./bestbooks.css";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  // http://localhost:3001/books

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_URL}books`)
      .then((result) => {
        console.log("result.data", result.data);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <div  style={{ width: "700px" }}>
            <Carousel fade>
              {this.state.books.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://th.bing.com/th/id/OIP.afRmR0H5pGtItzQf3Mcl-AHaEO?pid=ImgDet&w=626&h=357&rs=1"
                      alt="Slide"
                    />
                    <Carousel.Caption>
                      <h3 className="divslide">{item.title}</h3>
                      <br></br>
                      <h5 className="divslide">Description:  {item.description}</h5>
                      <br></br>
                      <h5 className="divslide">Status:   {item.status}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
