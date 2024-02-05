import { cn } from '@/lib/utils'

export const Image = ({
  className,
  src,
  caption,
}: {
  className?: string
  src: string[]
  caption: string
}) => {
  return (
    <picture className={cn('mx-auto', className)}>
      {src.length > 1 && (
        <source srcSet={src[1]} media='(prefers-color-scheme: dark)' />
      )}
      <img src={src[0]} alt={caption} className='w-full' />
      <figcaption className='text-center'>{caption}</figcaption>
    </picture>
  )
}
