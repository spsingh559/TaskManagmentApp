import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class EachCompletedTask extends React.Component{

	render(){
		let avatar;
		if(this.props.taskPriority=="High Priority"){
			avatar=[<Avatar src="../../images/red.jpeg" />]
		}else if(this.props.taskPriority=="Medium Priority")
		{
			avatar=[<Avatar src="../../images/green.jpeg" />]
		}else{
			avatar=[<Avatar src="../../images/yellow.jpeg" />]
		}
		return(
			 <Chip
          
          style={styles.chip}
        >
          {avatar}
          {this.props.taskName}
        </Chip>
			)
	}
}