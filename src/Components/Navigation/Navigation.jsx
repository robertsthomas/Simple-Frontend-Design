import React from 'react';


const Navigation = () => (

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">
			<i class="fas fa-teeth fa-2x mx-2 d-inline"></i>
			<h2 className='d-inline'>TopNotchTeeth</h2>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav ml-auto">
				<a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
				<a class="nav-item nav-link" href="#">About</a>
				<a class="nav-item nav-link" href="#">Contact</a>
				<form className="form-inline">
					<button className="btn btn-dark rounded-0 text-uppercase mx-1" type='button'>Sign up</button>
					<button className="btn btn-outline-dark text-uppercase rounded-0 mx-1" type='button'>Login</button>
				</form>
			</div>
		</div>
	</nav>

)

export default Navigation;