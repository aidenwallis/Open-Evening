import React from 'react'

class Unlock extends React.Component {

	componentDidMount() {
		window.socket = io()
		window.socket.emit('unlock')
		setTimeout(() => {
			location.href = '/'
		}, 500)
	}

	render() {
		return this.props.children
	}

}

export default Unlock