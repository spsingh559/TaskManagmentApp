import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
// import TodaysTask from './TodaysTask';
// import CompleteTask from './CompleteTask';
// import UpcomingTask from './UpcomingTask';
import CreateTask from './CreateTask';
import NextItem from './NextItem';
import TaskDetail from './TaskDetail';
import SearchTask from './SearchTask';
import TabView from './TabView';
import TaskCountList from './TaskCountList';
import Axios from 'axios';
import TomorrowTask from './TomorrowTask';
export default class RealTimeUpdate extends React.Component{
	state={
		taskData:[],
		todaysData:[],
		completeTaskData:'',
		ongoingData:''
	}

	componentDidMount=()=>{
		let monthName=['Jan', 'Feb','March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
		let todaysDate=new Date();
		let currentMonth=todaysDate.getMonth();
		let currentYear=todaysDate.getFullYear();
		let curretDay=todaysDate.getDate();
		var hours = todaysDate.getHours();
		var minutes = todaysDate.getMinutes();
		var seconds = todaysDate.getSeconds();
		let today =curretDay+"-"+monthName[currentMonth]+"-" +currentYear;

		Axios.get('/api/v1/task/'+today)
		.then((data)=>{
			console.log('request sent to task for get')
			// console.log(data.data.message.length);
			this.setState({taskData:data.data.message});
			let countOngoing=0;
			let countCompleted=0;
			this.state.taskData.forEach((data)=>{
				if(data.taskStatus=='Ongoing'){
					countOngoing++;
				}else if(data.taskStatus=='Completed'){
					countCompleted++;
				}
			})
			console.log('count ongoing '+countOngoing+''+countCompleted);
			this.setState({completeTaskData:countCompleted,ongoingData:countOngoing});

		})
		.catch((error)=>{
			console.log(error);
			console.log(error+"error in Task Api for get");
		})
	}

	newTaskList=(taskObj)=>{
		console.log('taskObj in RT Update');
		console.log(taskObj);
		Axios({
			method:'post',
			url:'/api/v1/task/',
			data:taskObj
		})
		.then((data) => {
			console.log('Task Api connected to server for post');
			console.log(data.data.message);

		})
		.catch((error) => {
			console.log(error);
			console.log(error+"error in Task Api for post");
		});

		var newObj=[taskObj].concat(this.state.taskData);
		this.setState({taskData:newObj});
	}

	deleteRow=(_id)=>{
		let currentData=this.state.taskData;
		currentData.forEach((data,index)=>{
			if(data._id==_id){
				var editData=currentData.splice(index,1);
				editData=null;	
			}
		});
		this.setState({taskData:currentData});

		Axios.delete('/api/v1/task/'+_id)
		.then((data)=>{
			console.log('request sent to task for delete Row');
		})
		.catch((error)=>{
			console.log(error);
			console.log(error+"error in Task Api for get");
		})


		
	}

	newTaskEditList=(obj)=>{
		let currentData=this.state.taskData;
		currentData.forEach((data,index)=>{
			if(data._id==obj._id){
				var editData=currentData.splice(index,1,obj);
				editData=null;
			}
		});

		this.setState({taskData:currentData});

		Axios({
			method:'put',
			url:'/api/v1/task/',
			data:obj
		})
		.then((data) => {
			console.log('Task Api connected to server for update');
			console.log(data.data.message);

		})
		.catch((error) => {
			console.log(error);
			console.log(error+"error in Task Api for update");
		});

		let countOngoing=0;
		let countCompleted=0;
		console.log('---------counters in Edit-----------');
		console.log(this.state.taskData);
			this.state.taskData.forEach((data)=>{
				if(data.taskStatus=='Ongoing'){
					countOngoing++;
				}else if(data.taskStatus=='Completed'){
					countCompleted++;
				}
			})
			console.log('completeTaskData'+countCompleted);
			console.log('ongoingData'+ countOngoing);

			// if(obj.taskStatus=='Ongoing'){
			// 	this.setState({ongoingData:this.state.ongoingData+1,completeTaskData:this.state.completeTaskData-1});
			// }else if(obj.taskStatus=='Completed'){
		this.setState({completeTaskData:countCompleted,ongoingData:countOngoing});
			// }

			
	}
	searchByName=(searchName)=>{
		Axios.get('/api/v1/task/searchName/'+searchName)
		.then((data)=>{
			console.log('request sent to task for get')
			// console.log(data.data.message.length);
			this.setState({taskData:data.data.message});
			let countOngoing=0;
			let countCompleted=0;
			this.state.taskData.forEach((data)=>{
				if(data.taskStatus=='Ongoing'){
					countOngoing++;
				}else if(data.taskStatus=='Completed'){
					countCompleted++;
				}
			})
			console.log('count ongoing '+countOngoing+''+countCompleted);
			this.setState({completeTaskData:countCompleted,ongoingData:countOngoing});

		})
		.catch((error)=>{
			console.log(error);
			console.log(error+"error in Task Api for get");
		})
	}

	render(){

		return(
			<div>
			<Grid>
			<Row style={{marginTop:'50px'}}>
			<Col xs={8}><SearchTask searchByName={this.searchByName}/></Col>
			</Row>
			<Row >
			<Col xs={8} >
			<TabView catagoryTaskData={this.state.taskData}/>
			</Col>
			<Col xs={4}>
			<TaskCountList todaysData={this.state.taskData} 
			completeTaskData={this.state.completeTaskData}
			ongoingData={this.state.ongoingData}
			/>
			</Col>
			</Row>
			<Row>
			<Col xs={12}><CreateTask newTaskList={this.newTaskList}/> </Col>
			</Row>
			<Row style={{marginTop:'-50px'}}>
			<Col xs={10}><TaskDetail taskData={this.state.taskData} 
			deleteRow={this.deleteRow} 
			newTaskEditList={this.newTaskEditList}
			/>
			</Col>
			<Col xs={2}><TomorrowTask /></Col>
			</Row>
			</Grid>
			</div>
			)
	}
}
// <Col xs={4}> <TodaysTask todaysData={this.state.taskData}/></Col>
// 			<Col xs={4}> <CompleteTask completeTaskData={this.state.completeTaskData} /></Col>
// 			<Col xs={4}> <UpcomingTask ongoingData={this.state.ongoingData} /></Col>