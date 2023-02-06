import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const SinglePage = () => {
   const { id } = useParams()
   const navigate = useNavigate()
   const [post, setPost] = useState(null)

   const goBack = () => navigate(-1)
   const goHome = () => navigate('/', { replace: true })

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((response) => response.json())
         .then((json) => setPost(json))
   }, [id])

   return (
      <div>
         <button onClick={goBack}>Go Back</button>
         {post && (
            <>
               <h1>
                  Breaking News #{post.id}: {post.title}
               </h1>
               <p>{post.body}</p>
               <Link to={`/posts/${id}/edit`}>Edit this post</Link>
            </>
         )}
      </div>
   )
}

export { SinglePage }
