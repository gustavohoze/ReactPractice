import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-[20vw] min-h-full p-4 flex flex-col justify-start gap-3'>
        <Button>Primary</Button>
        <Button variant={'primaryOutline'}>Primary Outline</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button variant={'secondaryOutline'}>Secondary Outline</Button>
        <Button variant={'tertiary'}>Tertiary</Button>
        <Button variant={'tertiaryOutline'}>Tertiary Outline</Button>
    </main>
  )
}

export default page