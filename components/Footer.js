import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='text-white bg-slate-800 flex md:flex-row flex-col'>
        <div className='m-4 p-4'>
            <p>Falkenborgvegen 35 C, 7044 Trondheim</p>
            <p>Telefon: 73 80 95 70</p>
            <p>Mobil: 92 44 28 00 / 92 44 27 00</p>
            <p>Epost: <Link className='hover:underline' href="mailto:mona@tryggbo.as">mona@tryggbo.as</Link> / <Link className='hover:underline' href="mailto:ingeborg@tryggbo.as">ingeborg@tryggbo.as</Link></p>
        </div>
        <div className='flex flex-col'>
            <Link className='hover:underline text-xl m-2 p-2' href='/'>TRYGGBO AS - Boligkompetanse</Link> 
            <Link className='hover:underline text-xl m-2 p-2' href="/om-oss">Om Oss</Link>
            <Link className='hover:underline text-xl m-2 p-2' href="/vi-tilbyr">Vi tilbyr</Link>
            <Link className='hover:underline text-xl m-2 p-2' href="/priser">Priser</Link>
            <Link className='hover:underline text-xl m-2 p-2' href="/kontakt">Kontakt oss</Link>
        </div>
        
    </div>
  )
}

export default Footer