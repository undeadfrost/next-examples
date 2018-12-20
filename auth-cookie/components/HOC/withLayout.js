import React, {Component} from 'react'
import Link from 'next/link'
import hoistNonReactStatic from 'hoist-non-react-statics'

const linkStyle = {
	marginRight: 15
}

const withLayout = (WrappedComponent) => {
	class Layout extends Component {
		render() {
			return (
				<div>
					<Link href='/index'>
						<a style={linkStyle}>首页</a>
					</Link>
					<Link href='/login'>
						<a style={linkStyle}>登录</a>
					</Link>
					<Link href='/profile'>
						<a style={linkStyle}>配置</a>
					</Link>
					<WrappedComponent {...this.props}/>
				</div>
			)
		}
	}
	
	hoistNonReactStatic(Layout, WrappedComponent)
	return Layout
}

export default withLayout
