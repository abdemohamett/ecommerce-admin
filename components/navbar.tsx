import React from 'react'
import UserButton from './UserButton'
import { MainNav } from '@/components/main-nav'
import StoreSwitcher from './store-switcher'
import { redirect } from 'next/navigation'
import prismadb from '@/lib/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { ThemeToggle } from './theme-toggle'

const Navbar = async() => {
  const user = await getCurrentUser();
  const userId = user?.id

  if(!userId) {
    redirect('/auth')
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId
    }
  })
  return (
    <div className='border-b'>
     <div className='flex h-16 items-center px-4'>
      <StoreSwitcher items={stores}/>
      <MainNav className='mx-6'/>
      <div className='ml-auto flex items-center space-x-4'>
        <ThemeToggle/>
       <UserButton/>
      </div>
     </div>
    </div>
  )
}

export default Navbar