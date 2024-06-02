"use client"

import Image from "next/image";
import google from "../public/google.png"
import { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
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
    <main className="flex justify-center items-center h-[70vh] chakra relative shade-thin">
      {/* <div className="w-full h-full bg-black opacity-50 absolute"></div> */}
      <div className="flex flex-col">
        <h1 className="text-8xl text-red-600 font-bold text-center mb-10">Martial Charts</h1>
        <div className="flex justify-center">
          {session?.user ? (
            <Link href={'/workout'} className="btn bg-white text-xl">Start Your Workout</Link>
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl text-white text-center mb-4">Login or Sign up to start your workout</h2>
              {providers && (
                Object.values(providers).map((provider) => (
                <button type='button' className='btn bg-white' key={provider.name} onClick={() => signIn(provider.id)}>
                  <Image alt="google" src={google} width={20} height={20} /><span>Sign in with Google</span>
                </button>
              )))}
            </div>
          )}
          {/* <button className=""></button> */}
        </div>
      </div>
    </main>
  );
}
