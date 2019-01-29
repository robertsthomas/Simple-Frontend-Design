import React from 'react'

import './style.scss';

const Cards = () => (
	<div className="row m-0" style={{position: 'relative', top: -70}}>
		<div className="card-deck w-100 justify-content-center">
			{[1, 2, 3].map(card => (
				<div className="col-3">
					<div className="card" style={{ height: 240, width: '18rem' }}>
						<div className="card-body">
						<i class="fas fa-desktop fa-2x pb-3"></i>
							<h3>Online Course</h3>
							<div className="underline ml-0"></div>
							<p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quibusdam dolore.</p>
					</div>
					</div>
				</div>
			))}
		</div>
	</div>
)

export default Cards
