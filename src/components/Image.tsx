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
    <picture className={className}>
      {src.length > 1 && (
        <source srcSet={src[1]} media='(prefers-color-scheme: dark)' />
      )}
      <img src={src[0]} alt={caption} className='mx-auto' />
      <figcaption className='text-center'>{caption}</figcaption>
    </picture>
  )
}
