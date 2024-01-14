import { classes } from "~/utils/element";
import css from "./header.module.styl"
import { FragmentCanvas } from "~/components/fragments";
import { ClientOnly } from "remix-utils/client-only";

export interface HeaderProps {
	inject?: JSX.Element
}
export default function Header(_: HeaderProps): JSX.Element {
	
	return <>
		<div className={classes(css.header, css.bodyConnecting)}>
			
			<ClientOnly>{() => <FragmentCanvas />}</ClientOnly>
			
			<div className={classes(css.title)}>
				<div className={css.mainTitle}>
					<span>Sukazyo Workshop</span>
				</div>
				<div className={css.subTitle}>
					<span>coming soon...</span>
				</div>
			</div>
			
			{_.inject}
			
			<div className={css.headerBodyConnector}></div>
			
		</div>
		<div className={css.bodyHeaderConnectorBox}>
			<div className={css.bodyHeaderConnector}></div>
		</div>
	</>;
	
}