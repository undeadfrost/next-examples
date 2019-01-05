import App, {Container} from 'next/app';
import React from 'react';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import makeStore from '../redux/index'
import withRedux from 'next-redux-wrapper'

class MyApp extends App {
	static async getInitialProps({Component, ctx}) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		return {pageProps};
	}
	
	render() {
		const {Component, pageProps, store} = this.props;
		return (
			<Container>
				<Provider store={store}>
					{/*<PersistGate loading={null} persistor={persistor}>*/}
					<Component {...pageProps}/>
					{/*</PersistGate>*/}
				</Provider>
			</Container>
		)
	}
}

export default withRedux(() => (makeStore))(MyApp)
