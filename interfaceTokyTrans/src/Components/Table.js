import Table from 'react-bootstrap/Table';
import React from 'react';
function SmallExample() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Client</th>
          <th>Depart</th>
          <th>Arrivée</th>
          <th>Heure de Depart</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nicolas</td>
          <td>Toamasina</td>
          <td>Antananarivo</td>
          <td>08:00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rabe</td>
          <td>Fianarantsoa</td>
          <td>Antananarivo</td>
          <td>08:00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Luc</td>
          <td >Antananarivo</td>
          <td >Mahajanga</td>
          <td>07:00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;