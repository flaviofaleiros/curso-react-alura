import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from './componentes/Sobre';
import Livros from './componentes/Livros';
import Autores from './componentes/Autores';
import NotFound from './componentes/NotFound';



ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' exact={true} component={App} />
			<Route path='/autores' component={Autores} />
			<Route path='/livros' component={Livros} />
			<Route path='/sobre' component={Sobre} />
			<Route path='' component={NotFound} />
		</Switch>
	</BrowserRouter>

	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
