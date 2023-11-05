import Footer from 'components/common/Footer'
import Header from 'components/common/Header'
import './globals.css'

export const metadata = {
  title: 'Eco-Natural Senses - Design flowers, plants & moss. Stabilised & dried',
  description: 'Your design & decoration with Eco-Natural Senses. Real flowers, roses, plants, foliage, arbor & moss; Stabilised & dried. Natural products of excellent quality!',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mx-auto'>
        <Header />
        <main className="mx-auto min-w-full px-4 sm:px-8 sm:py-5 md:px-8 md:py-10 lg:px-14 lg:py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
