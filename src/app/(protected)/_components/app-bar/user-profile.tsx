import Image from "next/image"
import Link from "next/link"

export function UserProfile() {
	return (
		<Link href="/profile/preview">
			<Image
				loading="lazy"
				alt="Profile"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&"
				className="aspect-square size-10 md:w-10"
				unoptimized
				width={24}
				height={24}
			/>
		</Link>
	)
}
