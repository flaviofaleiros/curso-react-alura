import React from 'react';
import LinkWrapper from '../Wrapper/LinkWrapper';

const Header = () => {
	return (
		<nav>
			<div className="nav-wrapper #33691e light-green darken-4" >

				<LinkWrapper to="/" className="brand-logo right" activeStyle={{}}>Repositório de Livros</LinkWrapper>
				<ul id="nav-mobile" className="left hide-on-med-and-down">
					
					<li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
					<li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
					<li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>

				</ul>
			</div>
		</nav>
	);
}
export default Header;