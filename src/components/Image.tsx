import { cn } from '@/lib/utils'

export const Image = ({
  className,
  src,
  caption,
}: {
  className?: string
  src: string
  caption: string
}) => {
  return (
    <figure className={cn('mx-auto', className)}>
      <img src={src} alt={caption} className='w-full' />
      <figcaption className='text-center'>{caption}</figcaption>
    </figure>
  )
}
