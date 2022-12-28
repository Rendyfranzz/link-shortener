import prisma from '../../prisma/prisma';
export const getServerSideProps = async ({params})=>{
  
  const url = await prisma.link.findUnique({
    where:{
      customLink : params.result
    },select: {
      originalLink: true,
      customLink: true,
    },
  })
 
  return {
    props: {
      data:url
    }
    }
  }

const result = ({data}) => {
  return (
    <div><p>hai{data.customLink}</p></div>
  )
}

export default result