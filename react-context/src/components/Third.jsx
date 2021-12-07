import React from 'react'
import UserContext from '../UserContext'
import { useContext } from 'react'

export default function Third() {
	const user = useContext(UserContext);
	console.log('user', user);
	return (
		<div>
			Third
		</div>
	)
}
