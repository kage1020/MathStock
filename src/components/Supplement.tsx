import { Card as SCard, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const Supplement = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <SCard
      className={cn(
        'border border-[--sl-color-gray-4] overflow-x-auto',
        className,
      )}
    >
      <CardHeader className='tracking-wider text-xl'>[別解]</CardHeader>
      <CardContent>{children}</CardContent>
    </SCard>
  )
}
