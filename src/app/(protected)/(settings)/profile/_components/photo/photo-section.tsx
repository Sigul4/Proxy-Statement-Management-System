import Image from "next/image"
import PhotoActions from "./photo-actions"

export default function PhotoSection() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-lg font-semibold">Photo</h2>
			<div className="flex gap-6">
				<Image
					loading="lazy"
					alt="Profile"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac50fc1d108140ae9922dce2db47471c706f3cf42e290ea8a233d06f47c3cac2?apiKey=463f2f09f74942b0bf01135f44a6248b&"
					className="mt-6 aspect-square size-[120px]"
					unoptimized
					width={320}
					height={320}
				/>
				<div className="mt-14 flex flex-col items-start">
					<PhotoActions />
				</div>
			</div>
		</div>
	)
}
