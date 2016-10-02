import React from 'react'
import { browserHistory } from 'react-router'

class Years extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return this.props.children
	}

}

export default Years