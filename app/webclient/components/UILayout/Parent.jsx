import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import Footer from './footer.jsx';
import RealTimeUpdate from '../RealTimeUpdate';


export default class ParentComponent extends React.Component{

	render(){
		return(
			<div>
			<Nav />
			{this.props.children}
			<RealTimeUpdate />
			<Footer />
			</div>
			);
	}
}