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
import Badge from 'material-ui/Badge'
import Toggle from 'material-ui/Toggle';
export default class TomorrowTask extends React.Component{

	render(){

		return(
			<div>
			<List>
        <ListItem
          primaryText="Manage Task View"
          secondaryText="Get a better view"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Filters</Subheader>
        <ListItem primaryText="Tomorrow's Task" rightToggle={<Toggle />} />
        <ListItem primaryText="Yesterday's Task" rightToggle={<Toggle />} />
        <ListItem primaryText="Upcoming Week Task" rightToggle={<Toggle />} />
      </List>
      <Divider />
      </div>
			)
	}
}