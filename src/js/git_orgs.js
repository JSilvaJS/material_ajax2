import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { ajax } from 'jquery';
import { render } from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Paper from 'material-ui/lib/paper';
import DeviceHub from 'material-ui/lib/svg-icons/hardware/device-hub';

export default class GitOrgs extends Component {

	constructor(...props) {
		super(...props);
		this.state = { orgs: [] };
	}

	componentWillMount() {
	let { user_name } = this.props.params;
	ajax(`https://api.github.com/users/${user_name}/orgs`).then(orgs => {
		this.setState({orgs});
	})
}

getOrgs(org) {
	return (
		<ListItem
        primaryText={org.login}
        leftAvatar={<Avatar src={org.avatar_url} />}
        rightIcon={<DeviceHub/>}
      />
	)
}

	render() {
		let { orgs } = this.state;
		let { user_name } = this.props.params;
		return (
			<List Subheader={`GitHub Orgs for ${user_name}`}>
			{orgs.map(::this.getOrgs)}
			</List>
		);
	}
}