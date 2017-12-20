import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import EachNewTaskRow from './EachNewTaskRow';


export default class TaskDetail extends React.Component {

	state={
    showCheckboxes:false,
    selectable:false
  }
  
  deleteRow=(_id)=>{
  	this.props.deleteRow(_id);
  }

  newTaskEditList=(obj)=>{
  	this.props.newTaskEditList(obj);
  }

	render(){
		console.log('-----------TaskDetail----------');
		console.log(this.props.taskData.length);
		if(this.props.taskData!='undefined' || this.props.taskData!=null ||this.props.taskData.length!=0){
		 let newData = this.props.taskData.map((data)=>{
      return(
      <EachNewTaskRow
      key={data._id}
       _id={data._id}
      taskName={data.taskName}
      taskDate={data.taskDate}
      taskTime={data.taskTime}
      taskStatus={data.taskStatus}
      taskPriority={data.taskPriority}
      deleteRow={this.deleteRow}
      newTaskEditList={this.newTaskEditList}
      />
      )
    });

		return(
			<Table
      selectable={this.state.selectable}
      style={{height:'auto'}}
      >
          <TableHeader adjustForCheckbox={this.state.showCheckboxes}
           displaySelectAll={this.state.showCheckboxes}>
             <TableRow>
             <TableHeaderColumn >Task Name</TableHeaderColumn>
              <TableHeaderColumn >Task Date</TableHeaderColumn>
               <TableHeaderColumn >Task Time</TableHeaderColumn>
                <TableHeaderColumn >Task Status</TableHeaderColumn>
                <TableHeaderColumn >Task Priority</TableHeaderColumn>
                <TableHeaderColumn >Action</TableHeaderColumn>
                </TableRow>
              </TableHeader>

           <TableBody displayRowCheckbox={this.state.showCheckboxes}>
            {newData}
        </TableBody>
        </Table>
			)}
		else{
			return null;
		}
		
	}
}