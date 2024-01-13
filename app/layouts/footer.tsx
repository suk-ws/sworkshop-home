import I from '~/utils/I'
import css from './footer.module.styl'

export default function Footer (): JSX.Element {
	return (
		<div className={css.footerContainer}>
			<div className={css.messageBox}>
				<p className='copyright'>Copyright © Sukazyo Workshop 2023</p>
				<p className={css.extUrls}>
					<a target='_blank' href='https://github.com/suk-ws'>
						<I nerd>nf-md-github</I>
					</a>
					<a target='_blank' href='https://github.com/suk-ws/sworkshop-home'>
						<I nerd>nf-md-git</I>
					</a>
					<a target='_blank' href='https://book.sukazyo.cc'>
						<I nerd>nf-fa-book</I>
					</a>
					<a target='_blank' href='https://twitter.com/_suk_ws'>
						<I nerd>nf-fa-twitter_square</I>
					</a>
					{/* <a target='_blank' href='https://a.sukazyo.cc/@workshop'>
						<I nerd>nf-md-mastodon</I>
					</a> */}
				</p>
			</div>
		</div>
	)
}