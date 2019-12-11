import React, { Fragment, Component } from 'react';
import Header from './componentes/Header';
import Tabela from './componentes/Tabela'
import 'materialize-css/dist/css/materialize.min.css';
import Formulario from './componentes/Formulario';
import PopUp from './Validator/PopUp';
import ApiService from "./ApiService";
//Development

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			autores: []
		}

	}

	removeAutor = id => {
		const { autores } = this.state;

		const autoresAtualizados = autores.filter(autor => {
			return autor.id !== id;
		});
		ApiService.RemoveAutor(id)
			.then(res => ApiService.TrataErros(res))
			.then(res => {
				if (res.message === 'deleted') {
					this.setState({ autores: [...autoresAtualizados] })
					PopUp.exibeMensagem('error', "Autor removido com sucesso");
				}
			})
			.catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao remover o autor!"));

	}


	listenerInputSubmit = autor => {
		ApiService.CriaAutor(JSON.stringify(autor))
			.then(res => ApiService.TrataErros(res))
			.then(res => {
				if (res.message === 'success') {
					this.setState({ autores: [...this.state.autores, res.data] })
					PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
				}

			})
			.catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao incluir o autor!"));

	}


	componentDidMount() {
		ApiService.ListaAutores()
			.then(res => ApiService.TrataErros(res))
			.then(res => {
				if (res.message === 'success') {
					this.setState({ autores: [...this.state.autores, ...res.data] })
				}
			})
			.catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao listar os autores!"))
	}




	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<Formulario listenerInputSubmit={this.listenerInputSubmit} />
					<Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
				</div>
			</Fragment>
		);
	}

}

export default App;
