import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  height: 150,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class UpcomingTask extends React.Component{

	render(){
		return(
			<div>
			<Paper style={style} zDepth={5} circle={true} >
			<h1> {this.props.ongoingData}</h1>
			  <Divider />
			  <h2> Ongoing Task </h2>
			  </Paper>


			</div>
		)
	}
	
}