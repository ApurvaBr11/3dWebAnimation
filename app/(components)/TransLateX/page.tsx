'use client'
import Link from 'next/link'

export default function Home() {
  return (
   <main className='flex min-h-screen justify-center items-center bg-red-50'>
      <Link href={'/products'}>
      <img className='h-96' src="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </Link>
   </main>
  )
}
