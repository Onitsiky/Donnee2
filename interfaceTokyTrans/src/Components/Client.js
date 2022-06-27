import Table from 'react-bootstrap/Table';
import React from 'react';
function Client() {
    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Heure de Depart</th>
                <th>Depart</th>
                <th>Destination</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>RAKOTO</td>
                <td>Nicolas</td>
                <td>08:00</td>
                <td>Antananarivo</td>
                <td>Toamasina</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Rafara</td>
                <td>Soa</td>
                <td>08:00</td>
                <td>Fianarantsoa</td>
                <td>Antananarivo</td>
            </tr>
            <tr>
                <td>3</td>
                <td >Rabe</td>
                <td >Andria</td>
                <td>07:00</td>
                <td>Toamasina</td>
                <td>Antananarivo</td>
            </tr>
            </tbody>
        </Table>
    );
}

export default Client;