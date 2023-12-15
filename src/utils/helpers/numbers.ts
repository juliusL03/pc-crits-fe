export const kFormatter = (number: number) => {
	const formatter = Intl.NumberFormat('en', {notation: 'compact'})
	return formatter.format(number)
}
