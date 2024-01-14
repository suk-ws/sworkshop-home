import Footer from "./footer"
import Header from "./header"

export interface DefaultLayoutProps {
	children?: React.ReactNode
	useComingSoon?: boolean
}

export default function DefaultLayout (_: DefaultLayoutProps): JSX.Element {
	return <>
		<Header />
		{_.children}
		<Footer />
	</>
}
