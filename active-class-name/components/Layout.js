import Link from 'next/link'
import ActiveLink from '../components/HOC/activeLink'

const linkStyle = {
	marginRight: 15,
}

const Layout = (props) => (
	<div>
		<ActiveLink href='/'>
			<a className="nav-link">首页</a>
		</ActiveLink>
		<ActiveLink href='/about'>
			<a className="nav-link">关于</a>
		</ActiveLink>
		<ActiveLink href='/user'>
			<a className="nav-link">用户</a>
		</ActiveLink>
		{props.children}
		<style jsx>{`
      .nav-link {
        margin-right: 15px;
        color: #000;
      }
      .active {
        color: red;
      }
    `}</style>
	</div>
)

export default Layout
