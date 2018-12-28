import React from 'react'
import '../App.css'
import './Item.css'


function Item({url, thumbnail, estimatedPricePercentageDifference, m2Price,
	price, estimatedPrice, size, city}){
	return (
		<a href={url}>
			<div className = "tile is-child is-9">
				<div className = "tile is-ancestor">
					<div className="tile is-5 is-parent">
						<div className="image tile is-child">
							<img src={`${thumbnail}`}/>
						</div>
					</div>
					<div className="tile is-parent">
						<div className="tile is-child is-12">
							<article className="message is-medium is-fullwidth is-warning">
								<div className="message-header">
									<strong>Price:</strong><h6>€{price}</h6>
									<strong>City:</strong><h6 className="city">{city}</h6>
								</div>
								<div className="columns message-body">
									<div className="column">
									<strong>Size:</strong> {size} m²
									</div>
									<div className="column">
										<strong>Our Estimation:</strong> €{estimatedPrice}
									</div>
									<div className="column">
										<strong>m² Price:</strong> €{m2Price}
									</div>
									<div className="column">
										<strong>Discount:</strong> {estimatedPricePercentageDifference}%
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</a>
	)
}

export default Item