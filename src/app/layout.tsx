import Sidebar from '@/component/sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next';


const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata= {
  title: 'Diaz Agfa Nuribi',
  description: 'Diaz Agfa Nuribi Portfolio/Curriculum Vitae',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html
      lang="en"
      // className={clsx(
      //   'text-black bg-white dark:text-white dark:bg-[#111010]',
      //   kaisei.variable
      // )}
    >
      <body className="antialiased max-w-4xl flex flex-col md:flex-row px-2 py-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar/>
        {/* <Navbar/> */}
        <main className="flex-auto min-w-0 mt-0 flex flex-col px-2 md:px-0">
          {children}
          {/* <Analytics /> */}
        </main>
      </body>
    </html>
  );
}
