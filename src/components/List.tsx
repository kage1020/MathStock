import { cn } from '@/lib/utils'

type ListType = 'none' | 'decimal' | 'lower-roman' | 'upper-roman'

export const List = ({
  children,
  type,
}: {
  children: React.ReactNode
  type: ListType
}) => {
  if (type === 'none') return <ul className='relative'>{children}</ul>

  return (
    <ol className={cn('relative group list-none [counter-reset:count]', type)}>
      {children}
    </ol>
  )
}

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li
      className={cn(
        '[counter-increment:count] group-[.lower-roman]:before:absolute group-[.lower-roman]:before:content-["("counter(count,lower-roman)")"] group-[.lower-roman]:before:left-0 group-[.upper-roman]:before:absolute group-[.upper-roman]:before:content-["("counter(count,upper-roman)")"] group-[.upper-roman]:before:left-0 group-[.decimal]:before:absolute group-[.decimal]:before:content-["("counter(count,decimal)")"] group-[.decimal]:before:left-0',
      )}
    >
      {children}
    </li>
  )
}
