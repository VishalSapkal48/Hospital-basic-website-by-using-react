import React from 'react';
import ReactDom from 'react-dom';
import footer from '../Css/footer.css';

class Footer extends React.Component {
   
  render()
  {
    return <>
      <div className="footer">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </>
  }

}
export default Footer;
