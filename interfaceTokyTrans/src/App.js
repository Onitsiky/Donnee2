import React from 'react';
import './App.css';
import CarouselHand from './Components/Carrousel';
import Drop from './Components/Drop';
import Mycard from './Components/Mycard';
import BrandExample from './Components/NavBar';
import MyTable from './Components/Table';

function App() {
  return (
    <>
      <BrandExample/>
      <CarouselHand/>

      <div className='container'>
      <br/><br/><br/>
      <h2 className='text-center'>Nos Offres</h2>
        <div className='row'>
            <Mycard variant='Light' header='Offre' offre='Lite' text='Prix : 35,000 Ariary'/>
            <Mycard variant='Secondary' header='Offre' offre='Classic' text='Prix : 40,000 Ariary'/>
            <Mycard variant='Primary' header='Offre' offre='Class' text='Prix : 50,000 Ariary'/>
        </div>
        <div className='row'>
        <Mycard variant='Danger' header='Offre' offre='Premium' text='Prix : 70,000 Ariary'/>
        <Mycard variant='Warning' header='Offre' offre='VIP' text='Prix : 150,000 Ariary'/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <h1 className='text-center'>Voyages du jour</h1>
      <div className='container'>
          <Drop/>
          <MyTable/>
      </div>
    </>
  );
}

export default App;
