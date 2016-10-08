import React from 'react'

class Refresh extends React.Component {

	componentDidMount() {
		window.socket = io()
		window.socket.emit('refresh')
	}

	render() {
		return this.props.children
	}

}

export default Refresh