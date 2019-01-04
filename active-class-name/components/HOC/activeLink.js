import Link from 'next/link'
import React from 'react'
import {withRouter} from 'next/router'

const ActionLink = ({router, children, ...props}) => {
	const child = React.Children.only(children)
	
	let className = child.props.className ? child.props.className : ''
	if (router.pathname === props.href) {
		className = `${className} active`.trim()
	}
	
	return <Link {...props}>{React.cloneElement(child, {className})}</Link>
}

export default withRouter(ActionLink)
