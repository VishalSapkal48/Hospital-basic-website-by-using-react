import React from 'react';
import ReactDom from 'react-dom';
import nav from '../Css/nav.css';
class NavBars extends React.Component {
 render()
 {
    return <>
         <div className="navbar">
                    <div className="row child">
                          <div className="col-4 first">
                               <h1>Klinik</h1>
                          </div> 
                          <div className="col-7 second">
                            <ul>
                                 <li><a href='#'>HOME</a> </li>
                                 <li><a href='#'>ABOUT</a> </li>
                                 <li><a href='#'>SERVICE</a> </li>
                                 <li><a href='#'>PAGE</a> </li>
                                 <li><a href='#'>CONTACT</a> </li>
                                 <li><a href='#' className='btn'>Appointment</a> </li>

                            </ul>
                          </div>
                    </div>

         </div>
    </>
 }
}
export default NavBars;