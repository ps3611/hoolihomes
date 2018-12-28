import React from 'react'
import Item from './Item'
import {tile} from 'bulma'

function ItemList({itemList}){
	const listItems = itemList.map((home, i)=>(
		<Item
			key={i}
			url={home.url}
			thumbnail={home.thumbnail}
			m2Price={home.m2Price}
			price={home.price}
			estimatedPrice={home.estimatedPrice}
			size={home.size}
			city={home.city}
			estimatedPricePercentageDifference={home.estimatedPricePercentageDifference}
		/>
	))

	return (
		<div className="tile is-ancestor">
			<div className="ItemList tile is-vertical is-parent">
				{ listItems }
			</div>
		</div>
	)
}

export default ItemList
