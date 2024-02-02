export default {
	
	title: (...title_fragment: String[]): String => {
		return title_fragment
			.reverse()
			.concat('Sukazyo Workshop')
			.join(' - ');
	}
	
}
