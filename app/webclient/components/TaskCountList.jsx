import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
export default class TaskCountList extends React.Component{

	render(){

		return(

			<List>
        <Subheader>Today's Task Count</Subheader>
        <ListItem
          leftAvatar={<Avatar src="../../images/green.jpeg" />}
          primaryText={<p style={{marginTop:'-40px'}}>Total Task
          <Badge
          secondary={true}
          style={{marginTop:'20px'}}
      badgeContent={this.props.todaysData.length} >
    </Badge> </p>
      }        
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="../../images/yellow.jpeg" />}
          primaryText={
            <p style={{marginTop:'-40px'}}>Ongoing Task
            <Badge
             style={{marginTop:'20px'}}
      badgeContent={this.props.ongoingData}
      secondary={true}
    >
    </Badge></p>
            
           
          }
     
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="../../images/blue.png" />}
          primaryText={
            <p  style={{marginTop:'-40px'}}>Completed Task
            <Badge
             style={{marginTop:'20px'}}
      badgeContent={this.props.completeTaskData}
      secondary={true}
    >
    </Badge></p>
            
          }
         
        />
        <Divider inset={true} />

        </List>
			)
	}
}