import React from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <>
    <div className='text-white bg-slate-800'>
    <nav className='m-4 p-4 md:block hidden'>
        <Link className='hover:underline text-xl' href='/'>TRYGGBO AS - Boligkompetanse</Link> |
        <Link className='hover:underline text-xl m-2 p-2' href="/om-oss">Om Oss</Link> |
        <Link className='hover:underline text-xl m-2 p-2' href="/vi-tilbyr">Vi tilbyr</Link> |
        <Link className='hover:underline text-xl m-2 p-2' href="/priser">Priser</Link> |
        <Link className='hover:underline text-xl m-2 p-2' href="/kontakt">Kontakt oss</Link> |
    </nav>

    </div>
    <div className='flex flex-col items-end px-6 py-4  justify-center md:hidden text-white bg-slate-800'>
      <Menu>
      <Menu.Button>
        <FontAwesomeIcon icon={faBars}
        className="ml-2 -mr-1 h-6 w-6 text-2xl "
        aria-hidden="true"></FontAwesomeIcon>
      </Menu.Button>
      <Menu.Items className="flex flex-col m-4 p-4">
          <Menu.Item >
            <Link href="/" className='hover:underline text-xl m-2'>TRYGGBO AS - Boligkompetanse</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/om-oss" className='hover:underline text-xl m-2'>Om Oss</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/vi-tilbyr" className='hover:underline text-xl m-2'>Vi tilbyr</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/priser" className='hover:underline text-xl m-2'>Priser</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/kontakt" className='hover:underline text-xl m-2'>Kontakt</Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
    
    </>
  )
}

export default Navbar