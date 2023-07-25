import './globals.css'
import { Inter } from 'next/font/google'

import { ModalProvider } from '@/providers/modal-provider'
import AuthContext from '@/providers/auth-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthContext>
        <ModalProvider/>
        <ToastProvider />
        {/* <p>{user?.name}</p> */}
        {children}
      </AuthContext>
      </ThemeProvider>
      </body>
    </html>
  )
}
