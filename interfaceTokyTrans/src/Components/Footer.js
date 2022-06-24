import React from "react";

export default function Footer(){
    return(
        <>
            <div className="container-fluid bg-dark text-white">
               <div className='row'>
                   <div id="left" className='col-4'>
                       <br/><br/>
                       <h3>Shifter</h3>
                       <p className="text">There are many variations of Lorem passages of Lorem Ipsum available,but the
                           majority</p>
                       <p className="text">By injected humour, or randomised words</p>
                   </div>

                   <div id="center" className='col-4'>
                       <br/><br/>
                       <h3>Quick Link</h3>
                       <div className="Container">
                           <a className="lien" href="">About Us </a>
                           <br/><a className="lien" href="">Service</a>
                           <br/><a className="lien" href="">Location</a>
                       </div>

                   </div>

                   <div id="middle" className='col-4'>
                       <br/><br/>
                       <h3>Recent News</h3>
                       <p className="text">There are many variations of passages Lorem</p>
                       <p className="text1">October 10, 2018</p>
                       <p className="text">There are many variations of passages of Lorem </p>

                   </div>
               </div>
            </div>
        </>
    )
}