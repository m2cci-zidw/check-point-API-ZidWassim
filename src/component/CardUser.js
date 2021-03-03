import React from 'react'
import{Card}from 'react-bootstrap'

const CardUser = ({user}) => {
    return (
        <div  className="card-user" >
          
                
            <Card style={{ width: '15rem' , height:'210px' }}>
                <Card.Body>
                    <Card.Title>{user.id}</Card.Title>
                   
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>{user.email}</Card.Title>
                    <Card.Title>{user.phone}</Card.Title>
                    
                 </Card.Body>
             </Card>
            
        </div>
    )
}

export default CardUser
