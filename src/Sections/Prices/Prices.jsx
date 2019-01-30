import React from 'react'

const Prices = () => (
	<div className='container'>
		<div className="row mb-3 m-0">
			<div className="col-12 text-wrap">
				<div className="h1 font-weight-bold mb-0">Price Plans</div>
				<div className='font-weight-bold text-muted text-uppercase'>online course</div>
			</div>
		</div>
		<div className="row mb-3 justify-content-center">

			<div className="card-deck">
				<div className="card shadow" style={{ width: '18rem' }}>
					<div className="card-body text-center">
						<div className="card-title pb-3">
							<div className="d-inline h2 font-weight-bold">$29</div>
							<div className="d-inline small text-muted">/month</div>
						</div>
						<ul class="list-unstyled">
							<li>Up to 3 computers</li>
							<li> 100 events per day</li>
							<li> 2 month event history</li>
							<li>Up to 3 computers</li>
							<li> 100 events per day</li>
							<li> 2 month event history</li>
						</ul>
						<button type="button" class="btn btn-outline-dark btn-lg mt-5 rounded-0" style={{ borderWidth: 'medium' }}>
							Get Started
							</button>
					</div>
				</div>

				<div className="card shadow" style={{ width: '18rem', }}>
					<div className="card-header text-center bg-dark text-white rounded-0">Most Popular</div>
					<div className="card-body text-center">
						<div className="card-title pb-3">
							<div className="d-inline h2 font-weight-bold">$29</div>
							<div className="d-inline small text-muted">/month</div>
						</div>
						<ul class="list-unstyled">
							<li>Up to 3 computers</li>
							<li> 100 events per day</li>
							<li> 2 month event history</li>
							<li>Up to 3 computers</li>
							<li> 100 events per day</li>
							<li> 2 month event history</li>
						</ul>
						<button type="button" class="btn btn-dark btn-lg rounded-0" style={{ borderWidth: 'medium' }}>
							Get Started
							</button>
					</div>
				</div>

				<div className="card shadow" style={{ width: '18rem' }}>
					<div className="card-body text-center">
						<div className="card-title pb-3">
							<div className="d-inline h2 font-weight-bold">$29</div>
							<div className="d-inline small text-muted">/month</div>
						</div>
						<ul class="list-unstyled">
							<li>Up to 3 computers</li>
							<li> 100 events per day</li>
							<li> 2 month event history</li>
							<li>Up to 3 computers</li>
							<li> 100 events per day</li>
							<li> 2 month event history</li>
						</ul>
						<button type="button" class="btn btn-outline-dark btn-lg mt-5 rounded-0" style={{ borderWidth: 'medium' }}>
							Get Started
							</button>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Prices
