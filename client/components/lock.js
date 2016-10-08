import React from 'react'

class Lock extends React.Component {

	componentDidMount() {
		window.socket = io()
		window.socket.emit('lock')
	}

	render() {
		return this.props.children
	}

}

export default Lock