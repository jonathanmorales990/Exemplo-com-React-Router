import React, { Component } from 'react';

class Sobre extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
		    id: props.match.params.id 
	    }
	}
	render() {
		return (
			<div>
				{
					this.state.id ? 
						(<h1>Contato: {this.state.id}</h1>) : (<h1>Contato sem parâmetros </h1>)
				}
			</div>
		)
  	}
}

export default Sobre;
