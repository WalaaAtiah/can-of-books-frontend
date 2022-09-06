import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "./bestbooks.css";
import BookFormModal from "../BookFormModal";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      setshow: false,
      flagbutton:true
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
  //methode to show modelform 
  openForm = () => {
    this.setState({
      setshow: true,
    });
  };

  handleClose = () => {
    this.setState({
      setshow: false,
    });
  }
    // http://localhost:3001/books

   postBook=(obj)=>{
    console.log("inside postbook")
    axios
    .post(`${process.env.REACT_APP_URL}books`, obj)
    .then(result =>{
      this.setState({
        books: result.data,
      })
    })
    .catch(err=>{
      console.log(err);
    })
   }


   deleteBook =(id)=>{
    this.setState({
      flagbutton:false
      
    });

    console.log(id)
    axios
    .delete(`${process.env.REACT_APP_URL}books/${id}`) //http://localhost:3001/deleteCat?id=${id}
    .then(result =>{
      this.setState({
        catArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
   }  


  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2 className="h2">
          My Essential Lifelong Learning &amp; Formation Shelf
        </h2>

        <div className="button">
          <button onClick={this.openForm}>Add a Book</button>
        </div>
        {this.state.books.length ? (
          <div style={{ width: "600PX" }}>
            <Carousel fade>
              {this.state.books.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                    id="img"
                      className="d-block w-100"
                      src="https://th.bing.com/th/id/R.755c4ed31d4b6de46bda3d934ef3360e?rik=yNxKu%2boe6XK7Dg&riu=http%3a%2f%2faplacecalledspecial.com%2fwp-content%2fuploads%2f2013%2f08%2fLove_Story.jpg&ehk=39GJaYRjEH4oK1ocS3MfGR50ZObkxnIHRIPufG3KCVA%3d&risl=&pid=ImgRaw&r=0"
                      alt="Slide"
                    />
                    <Carousel.Caption>
                      <h3 className="divslide">{item.title}</h3>
                      <br></br>
                      <h5 className="divslide">
                        Description: {item.description}
                      </h5>
                      <br></br>
                      <h5 className="divslide">Status: {item.status}</h5>
                      <br></br>
                      
                      (<button  onClick={() => this.deleteBook(item._id)} >Delete</button>)

                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <BookFormModal
          setshow={this.state.setshow}
          handleClose={this.handleClose}
          postBook={this.postBook}
        />
      </>
    );
  }
}

export default BestBooks;
