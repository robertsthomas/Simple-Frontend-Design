import React from 'react'

import './style.scss'

import Cards from "../Cards/Cards";

const Hero = () => (
	<div className="hero">
		<div className="container">
			<div className="hero__title">
				Believe in simple,
				<br />not complex
			</div>
			<button type='button' className="case_button">
				send us a case
			</button>
		</div>
	</div>
)

export default Hero;