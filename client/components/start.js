import React from 'react'
import { browserHistory } from 'react-router'

class Start extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		setTimeout(() => {
			document.getElementById('beginText').className += ' fadeOut'
		}, 2000)
		setTimeout(() => {
			browserHistory.push('/tour/y7')
			window.socket.emit('toY7')
		}, 3000)
	}

	render() {
		return (
			<div id="start" className="centerall">
				<div className="centerInner">
					<h1 className="animated fadeIn" id="beginText">Year 7</h1>
				</div>
			</div>
		)
	}

}

export default Start