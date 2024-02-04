import { Card as SCard, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <SCard
      className={cn(
        'bg-[--sl-color-gray-6] border border-[--sl-color-gray-4]',
        className,
      )}
    >
      <CardHeader className='p-0'></CardHeader>
      <CardContent>{children}</CardContent>
    </SCard>
  )
}
