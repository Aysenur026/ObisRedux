import React from 'react';

import './stylelogin.css';

class Footer extends React.Component{
 
    render(){
     
          return(
              <footer>

               <div className="foo text-center p-20">

                
                <div className="pull-center col-lg-4 col-xs-12 text-white">
                <p style={{color:"#789"}}>Copyright &copy;2022 by Me</p>
                </div>
              </div>
              </footer>


          );
    }
}
export default Footer;