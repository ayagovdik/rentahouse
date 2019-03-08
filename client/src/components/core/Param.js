import React from 'react'

import { IconArea, IconInknown } from './icons'

const icons = name => (
	{
		area: <IconArea />,
		ground: <IconArea />,
	}[name] || <IconInknown />
)
const measures = name => (
	{
		area: 'sqm',
		ground: 'sqa',
	}[name] || null
)

const Param = ({ name, value }) => <small className="param-house">{name}: {icons(name)}{value}{measures(name)}</small>

export default Param
