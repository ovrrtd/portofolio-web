'use client';

import {usePathname} from 'next/navigation'
import { LayoutGroup, motion } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';

const navItems = {
    '/': {
      name: 'home',
    },
    '/experience': {
      name: 'experience',
    },
    '/education': {
      name: 'education',
    },
    '/skill':{
      name: "skill"
    },
    '/project': {
      name: 'project',
    },
    
  };

export default function Navbar (){
    let pathname = usePathname() || '/';
    if (pathname.includes('/blog/')) {
      pathname = '/blog';
    }

    return (
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif ">
          <div className="flex flex-row md:flex-col lg:sticky lg:top-20">
            <div className="ml-2 hidden md:block font-serif font-bold text-3xl md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex-col md:flex-row items-start ">
              Z
            </div>
            <LayoutGroup>
              <nav
                className="flex flex-row md:flex-col items-start relative px-2 md:px-0 md:relative"
                id="nav"
              >
                <div className="flex flex-row md:flex-col ml-2 md:ml-1">
                  {Object.entries(navItems).map(([path, { name }]) => {
                    const isActive = path === pathname;
                    return (
                      <Link
                        key={path}
                        href={path}
                        className="transition-all hover:text-neutral-800 dark:hover:text-slate-300  flex align-middle"
                      >
                        <span className="relative py-1 px-2">
                          {name}
                          {path === pathname ? (
                            <motion.div
                              className="absolute inset-0 bg-neutral-100 dark:bg-gray-800 rounded-md z-[-1]"
                              layoutId="sidebar"
                              transition={{
                                type: 'spring',
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          ) : null}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </LayoutGroup>
          </div>
        </aside>
      ); 
}