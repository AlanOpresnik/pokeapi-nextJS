
import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <Button>HOLA</Button>
    </main>
  )
}
