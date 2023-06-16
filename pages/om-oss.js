import { Inter } from 'next/font/google'
import { getPages } from '@/lib/api'
import BlogContent from "@/components/BlogContent";
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function OmOss({pages}) {
  console.log(pages);
  return (
    <>
      <h1 className='font-bold p-4 m-4'>{pages[4].title}</h1> 
      <p className='p-4 m-4'><BlogContent content={pages[4].content} /></p>
      <div className='flex justify-center'>
        <div className='m-4 p-4'>
          <Image src={'/mona.jpeg'} width={150} height={150}></Image>
          <p className='p-2 m-2 font-bold'>Mona Ødegård</p>
          <p className='p-2 m-2'>Ergoterapeut/Boligkonsulent</p>
          <Link className='p-2 m-2 hover:underline' href="mailto:mona@tryggbo.as">mona@tryggbo.as</Link>
        </div>
        <div className='m-4 p-4'>
          <Image src={'/ingeborg.jpeg'} width={150} height={150}></Image>
          <p className='p-2 m-2 font-bold'>Ingeborg Nalsund</p>
          <p className='p-2 m-2'>Sosionom/Bedriftsøkonom</p>
          <Link className='p-2 m-2 hover:underline' href="mailto:ingeborg@tryggbo.as">ingeborg@tryggbo.as</Link>
        </div>
      </div>
    </>
    
  )
}

export async function getStaticProps(){
  const pages = await getPages();
  console.log(pages);
  return {
    props:{
      pages
    }
  }
}
