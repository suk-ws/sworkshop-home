import Footer from "./footer"
import Header from "./header"

export interface DefaultLayoutProps {
	children?: React.ReactNode
	useComingSoon?: boolean
}

export default function DefaultLayout (_: DefaultLayoutProps): JSX.Element {
	if (_.useComingSoon)
		return <>
			<Header
			useBodyConnector={false}
			inject={
				<Footer useBodyConnector={false} noBackgrond />
			} />
		</>
	return <>
		<Header />
		{_.children}
		<Footer />
	</>
}
