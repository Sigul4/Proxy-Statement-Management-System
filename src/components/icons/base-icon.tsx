import Image from "next/image"

export function BaseIcon({ src, width = 16, height = 16 }: { src: string; width?: number; height?: number }) {
	return <Image width={width} height={height} alt="Vector" src={src} />
}
