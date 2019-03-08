import React, { Component } from 'react'
import { Row } from 'reactstrap'
import './App.css'

import Navigation from './components/Navigation'
import CardHouse from './components/core/Card'

const items = [
	{
		id: 1,
		title: 'Дом в поселке «Петровский» ID 1032, 14 км',
		price: '350 000 руб / месяц',
		params: [
			{ name: 'area', value: 450 },
			{ name: 'ground', value: 12 },
		],
	},
	{
		id: 2,
		title: 'Дом в поселке «Новоархангельское» ID 11120, 7 км',
		price: '170 000 руб / месяц',
		params: [
			{ name: 'area', value: 1020 },
			{ name: 'ground', value: 54 },
		],
	},
]

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Navigation />
				</header>
				<section className="content">
					<Row>{ items.map(x => <CardHouse {...x} key={x.id} lg={4} />)}</Row>
				</section>
			</div>
		)
	}
}

export default App
