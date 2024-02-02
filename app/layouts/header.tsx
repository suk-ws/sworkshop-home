import { classes } from "~/utils/element";
import css from "./header.module.styl"
import { FragmentCanvas } from "~/components/fragments";
import { ClientOnly } from "remix-utils/client-only";
import { useOrElse } from "~/utils/fp";

export interface HeaderProps {
	inject?: JSX.Element
	useBodyConnector?: boolean
}
export default function Header(_: HeaderProps): JSX.Element {
	
	const useBodyConnector = useOrElse(_.useBodyConnector, true)
	
	return <>
		
		<div className={classes(css.header)}>
			
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
			
			{useBodyConnector && <div className={css.headerBodyConnector}></div>}
			
		</div>
		
	</>;
	
}
