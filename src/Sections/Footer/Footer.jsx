import React from 'react'

const Footer = () => (
	<div className="container-fluid bg-dark" style={{ height: 200 }}>
		<div className="container h-100">
			<div className="row text-white justify-content-center align-items-center h-100 text-center">
				<div className="col-4">
					<span className='px-3' style={{ color: 'white' }}>
						<i class="fab fa-facebook-f fa-3x"></i>
					</span>
					<span className='px-3' style={{ color: 'white' }}>
						<i class="fab fa-twitter fa-3x"></i>
					</span>
					<span className='px-3' style={{ color: 'white' }}>
						<i class="fab fa-linkedin-in fa-3x"></i>
					</span>
				</div>
				<div className="col-4">
					<h1><strong>Lets Talk?</strong></h1>
				</div>
				<div className="col-4">
					<button type='button' className="btn btn-light btn-lg rounded-0">Contact Us</button>
				</div>
			</div>
		</div>
	</div>
)

export default Footer
