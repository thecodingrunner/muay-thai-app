"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Image from 'next/image'

const Header = () => {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <div className='shade-thick'>
      <navbar className="flex justify-between items-center py-6 px-20 h-[15vh] ">
        <Link href={'/'} className='font-bold text-2xl text-red-600'>
          Martial Charts
        </Link>
        {session?.user ? (
          <div className='flex items-center gap-4'>
            <Link href={'/workout'} className='text-white'>Your Workouts</Link>
            <button type='button' className='btn bg-white' onClick={signOut}>Sign Out</button>
            <Image src={session?.user.image} width={37} height={37} alt='profile' className='rounded-full' />
          </div>
        ) : (
          <div className='flex items-center gap-4'>
            {providers && (
              Object.values(providers).map((provider) => (
              <button type='button' className='btn bg-white' key={provider.name} onClick={() => signIn(provider.id)}>Sign In</button>
            )))}
          </div>
        )}
      </navbar>
    </div>
  )
}

export default Header