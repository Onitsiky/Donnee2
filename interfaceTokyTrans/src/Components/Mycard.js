import Card from 'react-bootstrap/Card';
import React from 'react';

function MyCard(props) {
  const {variant,header,offre,text} = props;
  return (
    <>
     <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mt-5 m-4"
        >
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Title>{offre} </Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  );
}

export default MyCard;