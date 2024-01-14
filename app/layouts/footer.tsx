import I from '~/utils/I'
import css from './footer.module.styl'
import { ClientOnly } from 'remix-utils/client-only'
import { FragmentCanvas } from '~/components/fragments'
import { randomInt } from '~/utils/random'
import { useOrElse } from '~/utils/fp'
import { classes } from '~/utils/element'

export interface FooterProps {
	useBodyConnector?: boolean
	noBackgrond?: boolean
}
export default function Footer (_: FooterProps): JSX.Element {
	const useBodyConnector = useOrElse(_.useBodyConnector, true)
	return (
		<div className={classes(css.footerContainer, _.noBackgrond && css.noBackground)}>
			
			{(useBodyConnector) && <div className={css.footerBodyConnector}></div>}
			
			<div className={css.messageBox}>
				<div className={css.messages}>
					<p>Copyright © 2023-2024 Sukazyo Workshop, and its affiliates.</p>
					<p>Made with <I fill={1}>breakfast_dining</I> and <I fill={1}>favorite</I></p>
				</div>
				<div className={css.separator}></div>
				<div className={css.extUrls}>
					<a target='_blank' href='https://github.com/suk-ws'>
						<I nerd>nf-md-github</I>
						<span>GitHub Home</span>
					</a>
					<a target='_blank' href='https://github.com/suk-ws/sworkshop-home'>
						<I nerd>nf-md-git</I>
						<span>This Website</span>
					</a>
					<a target='_blank' href='https://book.sukazyo.cc'>
						<I nerd>nf-fa-book</I>
						<span>Workshop Documentation</span>
					</a>
					<a target='_blank' href='https://twitter.com/_suk_ws'>
						<I nerd>nf-fa-twitter_square</I>
						<span>Official Twitter (or x.com?)</span>
					</a>
					{/* <a target='_blank' href='https://a.sukazyo.cc/@workshop'>
						<I nerd>nf-md-mastodon</I>
					</a> */}
				</div>
			</div>
			
			{(_.noBackgrond != true) && <ClientOnly>{() => <FragmentCanvas countConfig={{
				typeA: randomInt(0, 2),
				typeB_normal: randomInt(0, 2),
				typeB_highlight: randomInt(0, 1)
			}} />}</ClientOnly>}
			
		</div>
	)
}