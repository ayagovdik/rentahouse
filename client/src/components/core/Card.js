import React from 'react'
import {
	Col,
	Card, CardImg, CardText, CardSubtitle, CardTitle, CardBody,
} from 'reactstrap'

import Param from './Param'

const CardComponent = ({ title, price, params, ...rest }) => <Col {...rest}>
	<Card className="card-house">
		<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
		<CardBody>
			<CardTitle>{title}</CardTitle>
			<CardSubtitle>{price}</CardSubtitle>
			<CardText>{ params.map(x => <Param key={x.name} {...x} />) }</CardText>
		</CardBody>
	</Card>
</Col>

export default CardComponent
