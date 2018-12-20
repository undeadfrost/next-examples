import Link from 'next/link'

const linkStyle = {
	marginRight: 15
}

const Layout = (props) => (
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
		{props.children}
	</div>
)

export default Layout
