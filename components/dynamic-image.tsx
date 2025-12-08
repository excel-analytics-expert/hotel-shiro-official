'use client'

import Image from 'next/image'

type DynamicImageProps = {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  rounded?: boolean
}

export default function DynamicImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}: DynamicImageProps) {
  const isData = src?.startsWith('data:')
  const isValidForNext = !isData && (src?.startsWith('/') || src?.startsWith('http'))

  if (isValidForNext) {
    if (fill) {
      return (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          priority={priority}
        />
      )
    }
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width || 800}
        height={height || 450}
        sizes={sizes}
        className={className}
        priority={priority}
      />
    )
  }

  // Fallback for data URLs or other schemes
  if (fill) {
    return (
      <div className={`relative ${className || ''}`}>
        <img src={src || "/placeholder.svg"} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    )
  }
  return <img src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
}
