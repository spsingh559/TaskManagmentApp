import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import EachNewTask from './EachNewTask';
import EachOngoingTask from './EachOngoingTask';
import EachCompletedTask from './EachCompletedTask';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

// const styles = {
//   chip: {
//     margin: 4,
//   },
//   wrapper: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
// };

export default class TabView extends React.Component{

	

  state={
  	value:'a'
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  }

	render(){
		let newTask=[];
		let ongoingTask=[];
		let completedTask=[];
		this.props.catagoryTaskData.forEach((data)=>{
			if(data.taskStatus=="New"){
				newTask.push(data);
			}else if(data.taskStatus=="Ongoing"){
				ongoingTask.push(data)
			}else{
				completedTask.push(data);
			}
		})

		console.log('-------new task---------');
		console.log(newTask);
		console.log('--------Ongoing Task-------');
		console.log(ongoingTask);
		console.log('-------Completed-----')
		console.log(completedTask)

		var newTaskData=newTask.map((data)=>{

			return(
      <EachNewTask
      key={data._id}
      taskName={data.taskName}
      taskPriority={data.taskPriority}
      />
      )
		});

		var newOngoingTaskData=ongoingTask.map((data)=>{

			return(
      <EachOngoingTask
      key={data._id}
      taskName={data.taskName}
      taskPriority={data.taskPriority}
      />
      )
		});

		var newCompletedTaskData=completedTask.map((data)=>{

			return(
      <EachCompletedTask
      key={data._id}
      taskName={data.taskName}
      taskPriority={data.taskPriority}
      />
      )
		});



		return(
			<Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Upcoming Task" value="a">
          <div>
            <h2 style={styles.headline}>Upcoming Task List</h2>
            {newTaskData}
           
          </div>
        </Tab>
        <Tab label="Ongoing Task" value="b">
          <div>
            <h2 style={styles.headline}>Ongoing Task List</h2>
            {newOngoingTaskData}
            
          </div>
        </Tab>
        <Tab label="Completed Task" value="c">
          <div>
            <h2 style={styles.headline}>Completed Task List</h2>
            {newCompletedTaskData}
            
          </div>
        </Tab>
      </Tabs>
			)
	}
}