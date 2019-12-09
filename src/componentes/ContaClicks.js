import React, {useState} from 'react';

function ContaClicks() {
	
	const [contatdor, setContador] = useState(0);
	
	return(
		<div>
			<p> Você Clicou x Vezes </p>
			<button onClick={()=>setContador(contatdor + 1)}> Clicar </button>
		</div>
	);
}
export default ContaClicks;