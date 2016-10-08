import React from 'react'

class App extends React.Component {

	constructor(props){
		super(props)
	}

	componentDidMount() {
		window.socket = io()
		window.socket.on('refreshnow', () => {
			location.href = '/'
			window.socket.emit('refreshed')
		})
		window.socket.on('lockem', () => {
			document.body.className = 'locked'
		})
		window.socket.on('unlockem', () => {
			document.body.classList.remove('locked')
		})
	}

	render() {
		return (
			<div>
				<div id="lock" className="centerall">
					<div className="text-center centerInner">
						<i className="fa fa-lock fa-5x" />
						<h1><strong>COMPUTER LOCKED</strong></h1>
					</div>
				</div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}

export default App