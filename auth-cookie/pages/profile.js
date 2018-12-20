import Layout from "../components/Layout";
import {withAuthSync} from '../components/HOC/auth'
import fetch from 'isomorphic-unfetch'

const Profile = ({forecast}) => (
	<Layout>
		<h1>天气</h1>
		{
			forecast.map((item, index) => (
				<p key={index}>{item.date},{item.high},{item.low}</p>
			))
		}
	</Layout>
)

Profile.getInitialProps = async (ctx) => {
	// console.log(ctx)
	const res = await fetch('https://www.apiopen.top/weatherApi?city=%E8%A5%BF%E5%AE%89')
	const json = await res.json()
	return {forecast: json.data.forecast}
}

export default withAuthSync(Profile)
