import I from '~/utils/I'
import css from './footer.module.styl'

export default function Footer (): JSX.Element {
	return (
		<div className={css.footerContainer}>
			<div className={css.messageBox}>
				<p className='copyright'>Copyright © Sukazyo Workshop 2023</p>
				<p className='urls'><I>github</I></p>
			</div>
		</div>
	)
}