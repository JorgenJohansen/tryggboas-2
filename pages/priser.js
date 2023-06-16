import { Inter } from 'next/font/google'
import { getPages } from '@/lib/api'
import BlogContent from "@/components/BlogContent";

const inter = Inter({ subsets: ['latin'] })

export default function Priser({pages}) {
  console.log(pages);
  return (
    <>
      <h1 className='font-bold p-4 m-4'>{pages[2].title}</h1> 
      <p className='p-4 m-4'><BlogContent content={pages[2].content} /></p>
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
