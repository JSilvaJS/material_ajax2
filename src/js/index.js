// Javascript Entry Point
import React, { Component } from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import { ajax } from 'jquery';
import { render } from 'react-dom';
import GitUsers from './git_users';
import GitOrgs from './git_orgs';
import Main from './main';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		<IndexRoute component={GitUsers}/>
		<Route path="/git_orgs/:user_name" component={GitOrgs}/>
		</Route>
	</Router>
	), document.querySelector('.app'))