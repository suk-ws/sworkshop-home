import type { MetaFunction } from "@remix-run/node";
import DefaultLayout from "~/layouts/layout_default";
import I from "~/utils/I";

export const meta: MetaFunction = () => {
	return [
		{ title: "Workshop Home" }
	];
};

export function IndexComingSoon(): JSX.Element {
	return (
		<DefaultLayout useComingSoon>
		</DefaultLayout>
	)
}

export function Index() {
	return (
		<DefaultLayout>
			
			<div>
				
				<h1><I weight={700} fill={0.5}>star</I>Hello, World!</h1>
				
				<p>
					Here is some of the symbols test:
					{/* like outlined<I type="outlined">star</I> star, */}
					rounded <I>star</I> star,
					{/* sharp <I type="sharp">star</I> star, */}
					and the default <I defaults>star</I> star with default size!
				</p>
				
		</div>
		</DefaultLayout>
	);
}

export default IndexComingSoon
