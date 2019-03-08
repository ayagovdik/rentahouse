import React from 'react'

const Icon = ({ name, size = 'lg' }) => <i className={`fa fa-${size} fa-${name}`}/>

export const IconArea = (props) => <Icon name="square" {...props} />
export const IconInknown = (props) => <Icon name="circle" {...props} />

