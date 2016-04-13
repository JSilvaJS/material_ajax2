import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { ajax } from 'jquery';
import { render } from 'react-dom';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Paper from 'material-ui/lib/paper';
import PersonIcon from 'material-ui/lib/svg-icons/social/person';

export default class GitUsers extends Component {
	render() {

		return (

    <List subheader="Github Users">
    	<Link to="/git_orgs/jisaacks">
	      <ListItem
	        primaryText="jisaacks"
	        rightIcon={<PersonIcon />}
	      /></Link>
	      <Link to="/git_orgs/sindresorhus">
	      <ListItem
	        primaryText="sindresorhus"
	        rightIcon={<PersonIcon />}
	      /></Link>
	      <Link to="/git_orgs/addyosmani">
	      <ListItem
	        primaryText="addyosmani"
	        rightIcon={<PersonIcon />}
	      /></Link>
	      <Link to="/git_orgs/wycats">
	      <ListItem
	        primaryText="wycats"
	        rightIcon={<PersonIcon />}
	      /></Link>
	      <Link to="/git_orgs/dhh">
	      <ListItem
	        primaryText="dhh"
	        rightIcon={<PersonIcon />}
	      /></Link>
    </List>
		);
	}
}