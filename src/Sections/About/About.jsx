import React from 'react'

import './style.scss'

import image from '../../images/smile1.jpg';


const About = () => (
	<div className='container'>
		<div className="page-row">
			<div className="col-12 text-wrap">
				<div className="h1 font-weight-bold mb-0">About</div>
				<div className='font-weight-bold text-muted text-uppercase'>T.N.T</div>
			</div>
		</div>
		<div className="page-row">
			<div className="col-10">
				<p className='text-left pb-5'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non magnam magni atque architecto vel est officiis dignissimos libero eaque sequi, repellendus fugit illum. Molestiae voluptates error ducimus aliquam sequi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit architecto eum tempora cupiditate non nobis dolores officiis voluptatem, quod quasi recusandae totam blanditiis rerum aperiam suscipit laboriosam praesentium nulla eos.
				</p>
			</div>
		</div>
		<div className="page-row">
			<div className="col-12">
				<img className='' style={{height: 400, width: '100%', objectFit: 'cover', objectPosition: 'right top', filter: 'grayscale(100%)'}} src={image} />
			</div>
		</div>
		<div className="page-row">
			{[1, 2, 3].map(col => (
				<div className="col-4">
					<div className="h5 font-weight-bold">Who We Are</div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis tempore, perferendis est commodi ipsam possimus ex nesciunt. Libero rem, iure vero ipsa consequatur cupiditate impedit iusto voluptas adipisci veniam!</p>
				</div>
			))}
		</div>
	</div>
)

export default About
