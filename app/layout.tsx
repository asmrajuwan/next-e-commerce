import { ModalProvider } from "@/providers/modal-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import { ToastProvider } from "@/providers/toast-provider"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      layout:{logoPlacement: "inside"},
      baseTheme: dark}}
    >
     <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ToastProvider/>
        <ModalProvider />{children}
        </ThemeProvider></body>
     </html>
    </ClerkProvider>
  )
}
