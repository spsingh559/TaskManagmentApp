import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Axios from 'axios';
export default class SearchTask extends React.Component {

	state={
		searchName:''
	}

	handlesearchName=(e)=>{
		this.setState({searchName:e.target.value});
	}

	handleSubmit=()=>{
		this.props.searchByName(this.state.searchName);
	}


	render(){
		return(
			<div>
			<h3> Search Task</h3>
			<TextField
			style={{marginTop:'-30px',width:'500px'}}

			hintText="Task Name"
			floatingLabelText="Enter Task Name"      
			value={this.state.searchName}
			onChange = {this.handlesearchName}

			/>
			
			<RaisedButton  label="Search Task" primary={true}  onClick={this.handleSubmit}/>
			</div>

			)
	}
}