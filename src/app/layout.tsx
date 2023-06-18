import Sidebar from '@/component/sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next';
import Provider from '@/app/provider'
import LigthDarkBtn from '@/component/light_dark_button';

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
        <Provider>
          <Sidebar/>
          <main className="flex-auto min-w-0 mt-0 flex flex-col px-2 md:px-0">
            {children}
          </main>
          <LigthDarkBtn className='fixed z-90 bottom-10 md:bottom-20 right-10 md:right-1/4 p-1 
            bg-slate-200 dark:bg-slate-700 rounded-full drop-shadow-lg flex 
            justify-center items-center hover:bg-slate-300 dark:hover:bg-slate-800 
            hover:drop-shadow-2xl animate-bounce duration-300'/>
        </Provider>
      </body>
    </html>
  );
}
