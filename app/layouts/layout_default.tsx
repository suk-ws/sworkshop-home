import Footer from "./footer"
import Header from "./header"

export interface DefaultLayoutProps {
	children?: React.ReactNode
}

export default function DefaultLayout (_: DefaultLayoutProps): JSX.Element {
	return <>
		<Header inject={Footer()} />
		{_.children}
	</>
}
