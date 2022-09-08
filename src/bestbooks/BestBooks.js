import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "./bestbooks.css";
import BookFormModal from "../BookFormModal";
import UpdateModel from "../UpdateModel";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      setshow: false,
      updateshow:false,
      currentbook : {}
    };
  }

  // http://localhost:3001/books
 //get book
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_URL}books`)
      .then((result) => {
        // console.log("result.data", result.data);
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
 // add book
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

// delete book
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
// update book 
openUpdateform=(item)=>{
  console.log("openUpdateform")
  this.setState({
    updateshow: true,
    currentbook :item

  });

}
UpdatehandleClose=()=>{
  this.setState({
    updateshow: false,
  });

}
updatebook=(obj,id)=>{
  console.log("inside update")
  console.log(obj)
  console.log(id)
  axios
  .put(`${process.env.REACT_APP_URL}books/${id}`, obj)
  .then(result=>{
    this.setState({
      books : result.data
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
          <div style={{ width: "800PX" }}>
            <Carousel fade className="carousel">
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
                       {item.description}
                      </h5>
                      <br></br>
                      <h5 className="divslide">Status: {item.status}</h5>
                      <br></br>
                      
                      (<button  onClick={() => this.deleteBook(item._id)} >Delete</button>)
                      (<button  onClick={() => this.openUpdateform(item)} >Update</button>)


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
        <UpdateModel
          updateshow={this.state.updateshow}
          UpdatehandleClose={this.UpdatehandleClose}
          updatebook={this.updatebook}
          currentbook={this.state.currentbook}
        />
      </>
    );
  }
}

export default BestBooks;
