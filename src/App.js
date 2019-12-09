import React, { Fragment, Component } from 'react';
import	Header from './componentes/Header';
import Tabela from './componentes/Tabela'
import 'materialize-css/dist/css/materialize.min.css';
import Formulario from './componentes/Formulario';
import PopUp from './Validator/PopUp';
import ApiService from "./ApiService";
//Material-UI

class App extends Component {
	state = {
		autores: [
			{
				nome: 'Paulo',
				livro: 'React',
				preco: '1000'
			},
			{
				nome: 'Daniel',
				livro: 'Java',
				preco: '99'
			},
			{
				nome: 'Marcos',
				livro: 'Design',
				preco: '150'
			},
			{
				nome: 'Bruno',
				livro: 'DevOps',
				preco: '100'
			}
		],
	}

	removeAutor = (index) => {
		const { autores } = this.state;

		this.setState(
			{
				autores: autores.filter((autor, postAtual) => {
					return postAtual !== index;
				}),
			}
		);
		PopUp.exibeMensagem('error', "Autor removido com sucesso");
	}


	listenerInputSubmit = autor => {
		this.setState({ autores:[...this.state.autores, autor]})
		PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
	}

	render() {

		const ListaAurores = ApiService.ListaAutores()
		.then(console.log(res => res.data));

		return (
			<Fragment>
				<Header />
				<div className="container">
				<Formulario listenerInputSubmit={this.listenerInputSubmit}/>
				<Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
				</div>
			</Fragment>
		);
	}

}

export default App;
