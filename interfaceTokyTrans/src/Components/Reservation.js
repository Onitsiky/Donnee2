import Card from 'react-bootstrap/Card';
import React from 'react';

function Reserver() {
    return (
        <Card style={{ width: '50rem' }} className='col-6 bg-gradient'>
            <Card.Body>
                <Card.Title className='text-center'>Réservation</Card.Title>
                <span>Nom:</span> <br/><input className="col-12" type="text" placeholder="Saisir votre Nom"/> <br/><br/>
                <span>Prénom:</span> <br/><input className="col-12" type="text" placeholder="Saisir votre Prénom"/><br/><br/>
                <span>Mail:</span> <br/><input className="col-12" type="text" placeholder="Saisir votre email"/><br/><br/>
                <span>Tel:</span> <br/><input className="col-12" type="text" placeholder="Saisir votre tel"/><br/><br/>
                <span>Date:</span> <br/><input className="col-12" type="text" placeholder="Saisir votre réservation"/><br/><br/>
                <input className="button" type="button" value="Réservation"/>
            </Card.Body>
        </Card>
    );
}

export default Reserver;