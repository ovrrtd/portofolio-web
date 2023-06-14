import Image from 'next/image'
import avatar from '../../public/avatar.jpg'
import {GitHubIcon,LinkedinIcon, MailIcon} from "@/component/icons"


const intro = "A backend developer, and while I may not be the best in the market, but love to learning new things and always strive to do my best in solving any problem that comes my way."

export default function Home() {
  return (
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col">
      <h1 className="font-serif text-3xl font-bold mb-2 md:mb-8">Diaz Agfa Nuribi</h1>
      <section className="px-2">
        <p className="mb-2"
          >{intro}</p>
        <div className='flex items-start md:items-center gap-2 md:gap-8 flex-row md:flex-row pt-4'>
          <Image
            alt='avatar'
            className='rounded-full grayscale'
            src={avatar}
            placeholder="blur"
            width={120}
            priority
          />

        <div className="mt-4 md:mt-2 ml-2 md:mx-2 space-y-2 md:space-y-4">
          {/* 
          (<a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ovrrtd"
              className="flex items-center gap-2"
            >
              {`${3} years of experience`}
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/ovrrtd"
              className="flex items-center gap-2"
            >
              {`${0} total github repository`}
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ovrrtd"
              className="flex items-center gap-2"
            >
              {`${0} stars on github`}
            </a>) 
          */}

          <p className='flex items-center font-serif gap-2'>
              <MailIcon size={16}/>diazagfa@gmail.com
            </p>
            <a 
              href="https://github.com/ovrrtd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex items-center font-serif gap-2 hover:font-extrabold'>
                <GitHubIcon size={16}/>ovrrtd
              </a>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex items-center font-serif gap-2 hover:font-extrabold'>
                <LinkedinIcon size={16}/>diazagfa
              </a>
          </div>
        </div>
        <div className='flex items-start my-1 md:my-4 py-1 md:py-4 flex-col md:flex-row gap-2 md:gap-8 text-sm'>
          {/* <p className='flex items-center font-serif font-thin gap-2'>
            <MailIcon size={16}/>diazagfa@gmail.com
          </p>
          <a 
            href="https://github.com/ovrrtd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center font-serif font-thin gap-2 hover:font-extrabold'>
              <GitHubIcon size={16}/>ovrrtd
            </a>
          <a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center font-serif font-thin gap-2 hover:font-extrabold'>
              <LinkedinIcon size={16}/>diazagfa
            </a> */}
        </div>
      </section>
      </main>
  )
}
