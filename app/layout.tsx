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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
