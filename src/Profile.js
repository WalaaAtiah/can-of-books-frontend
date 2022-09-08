import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user)
    return(
    <div className='divprofile'  style={{ display:"flex",justifyContent:'center' }}>
    <Card style={{ width: '22rem',margin:"15px" }}>
    <Card.Img variant="top" src={user.picture} />
    <Card.Body>
      <Card.Title>Hello {user.name}</Card.Title>
      <Card.Text>
        <h5>email: {user.email}</h5>
        <h5>nickname: {user.nickname}</h5>
      </Card.Text>
     
    </Card.Body>
  </Card>
  </div>
    )
    
    // <div>
    //    <h2>Hello {user.name}</h2> 
    //    <h2>email: {user.email}</h2> 
      

    //     </div>;

  }
}

export default withAuth0(Profile);