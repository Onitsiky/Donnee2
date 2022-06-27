<<<<<<< HEAD
import React from 'react';
import './App.css';
import CarouselHand from './Components/Carrousel';
import Drop from './Components/Drop';
import Mycard from './Components/Mycard';
import BrandExample from './Components/NavBar';
import MyTable from './Components/Table';
import Client from "./Components/Client";
import Redrop from "./Components/Redrop";
import Footer from "./Components/Footer";
import Reserver from "./Components/Reservation";

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
      <div className='container'>
          <div className='row'>
              <div className='col-6'>
                  <h1 className='text-center'>Voyages du jour</h1>
                  <br/><br/><br/>
                  <Drop />
                  <MyTable/>
              </div>
              <div className='col-6'>
                  <h1 className='text-center'>Voyageurs</h1>
                  <br/><br/><br/>
                    <Redrop/>
                  <Client/>
              </div>
          </div>
      </div>
        <br/><br/><br/>
        <div className='container'>
            <Reserver/>
        </div>
        <br/><br/><br/>
        <Footer/>
    </>
=======
import './App.css';
import Footer from './Components/Footer';
import MyNavbar from './Components/NavBar';

function App() {
  return (
  <>
    <MyNavbar/>
    <Footer/>
  </>
>>>>>>> d98525420c60453aee204f1ec3922036deb3c4e6
  );
}

export default App;
