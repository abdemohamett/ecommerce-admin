/* eslint-disable @next/next/no-img-element */
 
 import getCurrentUser from '@/app/actions/getCurrentUser'
import React from 'react'
 
 const UserButton = async() => {
  const user = await getCurrentUser()
   return (
     <div>
        <img className='h-10 w-10 rounded-full' src={user?.image!} alt='user'/>
     </div>
   )
 }
 
 export default UserButton