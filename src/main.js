

const startGame = ( imagen ) =>
{
		
		let userElection = document.getElementById( '__UserEle' )
		let pcImg = document.getElementById( '__PcEle' )
		let champion = document.getElementById( '__Champion' )

		let pcElection = Math.floor(Math.random() * (4 - 1)) + 1;

		if ( imagen === 1) userElection.src = './src/img/hello.svg'
		else if ( imagen === 2 ) userElection.src = './src/img/piedra.svg'
		else userElection.src = './src/img/tijera.svg'

		if ( pcElection === 1) pcImg.src = './src/img/hello.svg'
		else if ( pcElection === 2 ) pcImg.src = './src/img/piedra.svg'
		else pcImg.src = './src/img/tijera.svg'

		if( imagen === 1 && pcElection === 2 ||
		imagen === 2 && pcElection === 3 ||
		imagen === 3 && pcElection === 1)
		{
				champion.innerHTML = 'El Ganador es: Player 1'
		}
		else if ( imagen === pcElection)
		{
				champion.innerHTML = 'Esto es un empate !!!'
		}
		else
				champion.innerHTML = 'El Ganador es: Pc'

		userElection.style.visibility = 'visible'
		pcImg.style.visibility = 'visible'


		//./src/img/piedra.svg
		
}
