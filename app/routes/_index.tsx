import type { MetaFunction } from "@remix-run/node";
import I from "~/utils/I";

export const meta: MetaFunction = () => {
	return [
		{ title: "Workshop Home" }
	];
};

export default function Index() {
	return (
		<div>
			
			<h1><I weight={700} fill={0.5}>star</I>Hello, World!</h1>
			
			<p>Here is some of the symbols test:
				{/* like outlined<I type="outlined">star</I> star, */}
				rounded <I>star</I> star,
				{/* sharp <I type="sharp">star</I> star, */}
				and the default <I defaults>star</I> star with default size!
			</p>
			
		</div>
	);
}
