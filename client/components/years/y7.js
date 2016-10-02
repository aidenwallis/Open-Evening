import React from 'react'
import { browserHistory } from 'react-router'

class Y7 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		document.body.className = 'tourTime'
	}

	render() {
		return (
			<div className="tourHold foldOut">
				<div className="container">
					<div className="clearfix">
						<img src="/assets/images/logo.png" height="100" className="center-block animated fadeInUp" />
					</div>
					<div className="clearfix">
						<div className="tourInstructions">
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Y7