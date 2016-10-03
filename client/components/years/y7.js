import React from 'react'
import { browserHistory } from 'react-router'

class Y7 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		document.body.className = 'tourTime'
		setTimeout(()=> {
			document.getElementById('tourContain').className = 'tourHold'
		}, 1200)
	}

	render() {
		return (
			<div id="tourContain" className="tourHold foldOut">
				<div className="container">
					<div className="clearfix">
						<img src="/assets/images/logo.png" height="100" className="center-block animated fadeInUp" />
					</div>
					<div className="clearfix animated fadeInUp">
						<div className="tourInstructions">
							<div className="tourInner">
								<h1>Year 7 Overview</h1>
								<h3>Term 1</h3>
								<p>In Year 7, students will be introduced around the school system as well as the schools library system.</p>
								<p>Once they have gotten to grips with the way that the school system works, they will be studying internet security and e-safety.</p>
								<h3>Term 2</h3>
								<p>In term 2, students will be given a task to design their own magazine cover in Microsoft Publisher, they will also learn the correct ways to use Microsoft Excel and develkop effective presentation skills.</p>
								<h3>Term 3</h3>
								<p>Students will learn how to program their own Big Trak robot, teaching them how computer algorithms work.</p>
								<p>Students will also study HTML and CSS, which are the base languages used to build your own website, similar to this application, as this was written in HTML, CSS and JavaScript. They will mostly study these skills on CodeCademy.com</p>
								<p>They will also be sitting a small test to allow the ICT department to understand where the student is with their progress.</p>
								<h3>Term 4</h3>
								<p>Web development work will continue throughout term 4, allowing students to further improve their skills of HTML and CSS.</p>
								<h3>Term 5</h3>
								<p>Students will learn how to create their own vectorised game character in Serif WebPlus, and learn how to use the schools 3D printers.</p>
								<h3>Term 6</h3>
								<p>Students will begin to learn how to develop their own computer gamers in Kodu, and study computer programming even further, teaching them more basic terms and concepts.</p>
							</div>
						</div>
						<p className="text-center madeby">Designed and Developed by Aiden Wallis - Year 11.</p>
					</div>
				</div>
			</div>
		)
	}

}

export default Y7