import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'react-bootstrap';
import { Menu, Container } from './components/index.jsx';

const app = document.getElementById("app");

ReactDOM.render(
	<div>
		<Menu />
		<Container />
	</div>
	, app);
