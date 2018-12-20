import React, {Component} from 'react'
import Router from 'next/router'
import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch'
import qs from 'qs'
import cookie from 'js-cookie'

const url = 'http://koa2manager.service.undeadfrost.cn/admin/login'

class Login extends Component {
	state = {
		username: '',
		password: ''
	}
	
	handleSubmit = async (e) => {
		e.preventDefault()
		const response = await fetch(url, {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: qs.stringify({username: this.state.username, password: this.state.password})
		})
		if (response.ok) {
			const {token} = await response.json()
			cookie.set('token', token, {expires: 1})
			Router.push('/profile')
		}
	}
	
	usernameHandleChange = (e) => {
		this.setState({username: e.target.value})
	}
	
	passwordHandleChange = (e) => {
		this.setState({password: e.target.value})
	}
	
	render() {
		return (
			<Layout>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.usernameHandleChange}/>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.passwordHandleChange}/>
					<button type="submit">Login</button>
				</form>
			</Layout>
		)
	}
}

export default Login
