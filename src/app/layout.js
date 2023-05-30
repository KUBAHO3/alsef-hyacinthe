import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ALSE Forum',
  description: 'The African Life Science Enhancement Forum aims to enhance life science research and innovation in Africa by creating a community of life science aspirants, current students, experts, and stakeholders in the field across Africa. Together, we can improve the quality and sustainability of life for all Africans.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
