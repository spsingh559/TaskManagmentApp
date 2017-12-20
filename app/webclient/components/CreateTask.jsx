import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Row,Col} from 'react-bootstrap';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
export default class CreateTask extends React.Component {


	state={
		taskCreateViewStatus:false,
		value:'',
		value12: null,
		taskName:'',
		controlledDate: null,

	}

	handleChangeTimePicker12 = (event, date) => {
		this.setState({value12: date});
	};

	handletaskName=(e)=>{
		this.setState({taskName:e.target.value});
	}

	handleCalenderChange = (event, date) => {
		this.setState({
			controlledDate: date,
		});
	};

	handleChange = (event, index, value) => this.setState({value});

	newTask=()=>{
		this.setState({taskCreateViewStatus:true});
	}
	handleSubmit=()=>{
		let monthName=['Jan', 'Feb','March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
		let currentMonth=this.state.controlledDate.getMonth();
		let currentYear=this.state.controlledDate.getFullYear();
		let curretDay=this.state.controlledDate.getDate();
		var hours = this.state.value12.getHours();
		var minutes = this.state.value12.getMinutes();
		var seconds = this.state.value12.getSeconds();
		let taskPriority;
		var taskObj={
			_id:Date.now(),
			taskName:this.state.taskName,
			taskDate:curretDay+"-"+monthName[currentMonth]+"-" +currentYear,
			taskTime:hours+":"+ minutes+":"+seconds,
			taskPriority:this.state.value,
			taskStatus:'New'
		}
		console.log(taskObj);
		this.props.newTaskList(taskObj);
		this.setState({taskCreateViewStatus:false,taskName:''});
	}

	handleCancel=()=>{
		this.setState({taskCreateViewStatus:false});
	}

	render(){
		if(this.state.taskCreateViewStatus==false){
			return(
				<div>
				
				<FloatingActionButton secondary={true} onClick={this.newTask}>
      <ContentAdd />
    </FloatingActionButton>
				</div>

				)}
			else{
				return(
					<div>
					<Row>
					<Col xs={4} >
					<TextField
					hintText="Task Name"
					floatingLabelText="Enter Task Name"      
					value={this.state.taskName}
					onChange = {this.handletaskName}
					/>
					</Col>
					<Col xs={4} style={{marginLeft:'50px', marginTop:'25px'}}>
					<DatePicker
					hintText="Select Date"
					value={this.state.controlledDate}
					onChange={this.handleCalenderChange}
					/>
					</Col>
					</Row>
					<Row>
					<Col xs={4}>
					<TimePicker
					format="24hr"
					hintText="Set Time"
					value={this.state.value12}
					onChange={this.handleChangeTimePicker12}
					/>
					</Col>    
					<Col xs={4} style={{marginLeft:'50px'}}>

					<SelectField
					value={this.state.value}
					onChange={this.handleChange}
					floatingLabelText="Select Priority"
					>
					<MenuItem value={"High Priority"} primaryText="High Priority" />
					<MenuItem value={"Medium Priority"} primaryText="Medium Priority" />
					<MenuItem value={"Low Priority"} primaryText="Low Priority" />
					</SelectField>
					</Col>
					</Row>
					<br />
					<RaisedButton label="Submit" primary={true}  onClick={this.handleSubmit}/>
					<RaisedButton label="Cancel" secondary={true}  onClick={this.handleCancel}
					style={{marginLeft:'50px' }}/>
					</div>
					)
			}
		}
	}

// <DropDownMenu value={this.state.value} onChange={this.handleChange}>
//           <MenuItem value={1} primaryText="High Priority" />
//           <MenuItem value={2} primaryText="Medium Priority" />
//           <MenuItem value={3} primaryText="Low Priority" />
//         </DropDownMenu>