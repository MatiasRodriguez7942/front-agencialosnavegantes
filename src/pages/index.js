import  React from "react"
import Header from "../componentes /header"
import UsePosts from "../hooks/usePosts"
import Image from 'react-bootstrap/Image'
const IndexPage = () => {
  const response = UsePosts()
  const post = response.allStrapiPost.nodes
 
  console.log(post)
  
  return (
   <React.Fragment>
     <Header/>
     <Image src="holder.js/171x180" thumbnail />
     {post.map(post=>(
     <div>
       <h3 key="post.id">{post.Titulo}</h3>
        <Image src={post.Imagen.url} thumbnail />
        
     </div>
     ))}
   </React.Fragment>
  )
}

export default IndexPage
