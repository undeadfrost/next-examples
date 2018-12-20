import React, {Component} from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import nextCookie from 'next-cookies'
import Router from 'next/router'

export const withAuthSync = (WrappedComponent) => {
	class AuthSync extends Component {
		static async getInitialProps(ctx) {
			const {token} = nextCookie(ctx)
			if (!process.browser && !token) {
				ctx.res.writeHead(302, {
					Location: '/login'
				})
				ctx.res.end()
				return
			}
			if (!token) {
				Router.push('/login')
			}
			const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(ctx);
			return {...pageProps}
		}
		
		constructor(props) {
			super(props)
			console.log('constructor')
		}
		
		async componentWillMount() {
			await setTimeout(() => {
				console.log('componentWillMount!')
			}, 5000)
		}
		
		componentDidMount() {
			console.log('componentDidMount')
		}
		
		render() {
			return (
				<WrappedComponent {...this.props}/>
			)
		}
	}
	
	// hoistNonReactStatic(AuthSync, WrappedComponent)
	return AuthSync
}


