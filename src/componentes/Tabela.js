import React, { Component } from 'react';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th>Autores</th>
				<th>Livros</th>
				<th>Preços</th>
				<th>Remover</th>
			</tr>
		</thead>
	)
}

const TableBody = (props) => {
	const linhas = props.autores.map((linha) => {
		console.log(linha.id);
		return (
			<tr key={linha.id+Math.random() * 20000}>
				<td>{linha.nome}</td>
				<td>{linha.livro}</td>
				<td>{linha.preco}</td>
				<td><button className="waves-effect waves-light btn-small #33691e light-green darken-4" onClick={() => { props.removeAutor(linha.id) }} >Remover</button></td>
			</tr>
		);
	});
	return (
		<tbody>
			{linhas}
		</tbody>
	);
}

export default class Tabela extends Component {
	render() {

		const { autores, removeAutor } = this.props;
		return (

			<table className="centered highlight">
					<TableHead />
					<TableBody autores={autores} removeAutor={removeAutor} />

			</table>
		);
	}
}
