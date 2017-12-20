import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Row,Col} from 'react-bootstrap';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';

export default class EachNewTaskRow extends React.Component {

state={
	rowStatus:false,
	taskName:this.props.taskName,
	taskDate:this.props.taskDate,
	taskTime:this.props.taskTime,
	taskStatus:this.props.taskStatus,
	value:this.props.taskPriority
}

handleChangeTimePicker12 = (event, date) => {
    this.setState({taskTime: date});
  };

  handletaskName=(e)=>{
  	this.setState({taskName:e.target.value});
  }

  handleCalenderChange = (event, date) => {
    this.setState({ taskDate: date});
  };

	handleChange = (event, index, value) => this.setState({value});
	// handleStatusChange=(value)=>this.setState({valueStatus:value});
	handleTaskStatusChange= (event, index, value) => this.setState({taskStatus:value});


editRow=()=>{
	this.setState({rowStatus:true});
}

deleteRow=()=>{
	this.props.deleteRow(this.props._id);
}

handleCancel=()=>{
	this.setState({rowStatus:false});
}

handleEditSubmit=()=>{
	let monthName=['Jan', 'Feb','March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
	    let currentMonth=this.state.taskDate.getMonth();
	    let currentYear=this.state.taskDate.getFullYear();
	    let curretDay=this.state.taskDate.getDate();
	    var hours = this.state.taskTime.getHours();
		var minutes = this.state.taskTime.getMinutes();
		var seconds = this.state.taskTime.getSeconds();
		let taskPriority;
		let taskEditObj={
			_id:this.props._id,
			taskName:this.state.taskName,
			taskDate:curretDay+"-"+monthName[currentMonth]+"-" +currentYear,
			taskTime:hours+":"+ minutes+":"+seconds,
			taskStatus:this.state.taskStatus,
			taskPriority:this.state.value
		}
		console.log(taskEditObj);
		this.props.newTaskEditList(taskEditObj);
		this.setState({rowStatus:false,taskName:''});
}
	render(){
		let Completed;

		if(this.props.taskStatus=='Completed')
		{ Completed=[ <TableRowColumn >{this.props.taskStatus}</TableRowColumn>]}else{
			Completed=[<SelectField
                        value={this.state.taskStatus}
                        onChange={this.handleTaskStatusChange}
                        floatingLabelText="Select Status"
                      >
                      <MenuItem value={"New"} primaryText="New" />
                       <MenuItem value={"Ongoing"} primaryText="Ongoing" />
     				  <MenuItem value={"Completed"} primaryText="Completed" />
                      </SelectField>]
               

		}
		if(this.state.rowStatus==false){
		return(
			<TableRow >
                <TableRowColumn  >{this.props.taskName}</TableRowColumn>
                <TableRowColumn >{this.props.taskDate}</TableRowColumn>
                <TableRowColumn >{this.props.taskTime}</TableRowColumn>
                  <TableRowColumn >{this.props.taskStatus}</TableRowColumn>
                <TableRowColumn >{this.props.taskPriority}</TableRowColumn>

                <TableRowColumn >
                <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Edit" onClick={this.editRow}/>
      <MenuItem primaryText="Delete" onClick={this.deleteRow} />
    </IconMenu>
                </TableRowColumn>

      </TableRow>

			)}else{
			return(
			<TableRow >
                <TableRowColumn  >
                <TextField
      hintText="Task Name"
      floatingLabelText="Enter Task Name"      
      value={this.state.taskName}
      onChange = {this.handletaskName}
    />
                
                </TableRowColumn>
                <TableRowColumn >
                <DatePicker
        hintText="Edit Date"
        value={this.state.taskDate}
        onChange={this.handleCalenderChange}
      />
                </TableRowColumn>
                <TableRowColumn >
                <TimePicker
          format="ampm"
          hintText="Edit Time"
          value={this.state.taskTime}
          onChange={this.handleChangeTimePicker12}
        />
                </TableRowColumn>
                <TableRowColumn >
                 {Completed}
                </TableRowColumn>

                <TableRowColumn >
                <SelectField
                        value={this.state.value}
                        onChange={this.handleChange}
                        floatingLabelText="Select Priority"
                      >
                       <MenuItem value={"High Priority"} primaryText="High Priority" />
     				  <MenuItem value={"Medium Priority"} primaryText="Medium Priority" />
		           <MenuItem value={"Low Priority"} primaryText="Low Priority" />
                      </SelectField>
                </TableRowColumn>
                <TableRowColumn style={{width:'auto'}}>
                <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Submit" onClick={this.handleEditSubmit}/>
      <MenuItem primaryText="Cancel" onClick={this.handleCancel} />
    </IconMenu>
           
                </TableRowColumn>

      </TableRow>)
		}
	}
}
