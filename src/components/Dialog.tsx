import {
  Dialog as SDialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export const Dialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <SDialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='h-fit w-full my-2'>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className='flex justify-center'>{children}</DialogContent>
    </SDialog>
  )
}
