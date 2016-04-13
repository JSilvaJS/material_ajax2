import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { ajax } from 'jquery';
import { render } from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Paper from 'material-ui/lib/paper';
import DeviceHub from 'material-ui/lib/svg-icons/hardware/device-hub';

export default class Main extends Component {
	render () {
		return (

			<div className="paper-div">
				<Paper className="paper-style" zDepth={5}>
				{this.props.children}
				</Paper>
			</div>
		);
	}
}
