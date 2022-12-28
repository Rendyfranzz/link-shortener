
import { useRouter } from 'next/router'
import React from 'react'
import prisma from '../prisma/prisma';


export const getServerSideProps = async ({params})=>{
  console.log(params.link);

  const url = await prisma.link.findUnique({
    where:{
      customLink : params.link
    }
  })

  console.log(url);
  return {
    redirect:{
      destination:url.originalLink
    }
  }
}

const Link = () => {
  const router = useRouter()
  const {link} = router.query
  return (
    <div>{link}</div>
  )
}

export default Link