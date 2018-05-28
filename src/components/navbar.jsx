import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	
	render() {
  	
		return (
		    <div>
		      	<ul>

		          <li><Link to="/">Inicio</Link></li>
		          <li><Link to="/sobre">Sobre</Link></li>
		          <li><Link to="/contato/1">Contato</Link></li>

		        </ul>
	        </div>

		);
	    
  	}
}

export default Navbar;
