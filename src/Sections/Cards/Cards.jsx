import React from 'react'

const Cards = () => (
	<div className="row m-0" style={{position: 'relative', top: -70}}>
		<div className="card-deck w-100 justify-content-center">
			{[1, 2, 3].map(card => (
				<div className="col-3">
					<div className="card" style={{ height: 200, width: '18rem' }}>
						<div className="card-body">
							Card Stuff
					</div>
					</div>
				</div>
			))}
		</div>
	</div>
)

export default Cards
