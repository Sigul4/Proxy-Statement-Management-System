interface Props {
	onWishlist?: () => void
}

export default function WishlistButton({ onWishlist }: Props) {
	return (
		<button onClick={onWishlist}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="#333">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 3.98797C0 1.78547 1.78547 0 3.98797 0H11.9639C14.1664 0 15.9519 1.78547 15.9519 3.98797V18.0025C15.9519 19.6244 14.1187 20.5677 12.7989 19.6251L7.97593 16.1801L3.15297 19.6251C1.83321 20.5677 0 19.6244 0 18.0025V3.98797ZM3.98797 1.99398C2.88672 1.99398 1.99398 2.88672 1.99398 3.98797V18.0025L6.81693 14.5575C7.51024 14.0623 8.44163 14.0623 9.13494 14.5575L13.9579 18.0025V3.98797C13.9579 2.88672 13.0652 1.99398 11.9639 1.99398H3.98797Z"
					fill="#3A5A66"
				/>
			</svg>
		</button>
	)
}
