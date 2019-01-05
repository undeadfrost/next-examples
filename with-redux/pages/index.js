import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {test} from '../redux/actions/test'

const mapStateToProps = state => ({foo: state.foo})

const mapDispatchToProps = dispatch => bindActionCreators({test}, dispatch)

class Index extends Component {
	addTest = () => {
		this.props.test(parseInt(this.props.foo) + 1)
	}
	
	
	render() {
		if (process.browser) {
			console.log("浏览器")
		} else {
			console.log(this.props.foo)
		}
		return (
			<div>
				<h1>{this.props.foo}</h1>
				<button onClick={this.addTest}>++</button>
				<h1>服务器</h1>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
