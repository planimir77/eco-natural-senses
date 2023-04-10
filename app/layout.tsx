import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import './globals.css'

export const metadata = {
  title: 'Eco-Natural Senses',
  description: 'Online Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='prose prose-headings:font-normal mx-auto min-w-full px-2 sm:px-4 md:px-8 lg:px-14'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
