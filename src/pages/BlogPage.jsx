/*
   Спарсим данные из сети для наших статей:

   import { useState, useEffect } from 'react'

   const [posts, setPosts] = useState([])
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((res) => res.json())
         .then((data) => setPosts(data))
   }, [])
*/

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BlogPage = () => {
   const [posts, setPosts] = useState([])
   console.log(useLocation())

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((data) => setPosts(data))
   }, [])

   return (
      <div>
         <h1>Our news</h1>
         <Link to="/posts/new" style={{ margin: '1rem 0', display: 'inline-block' }}>
            Add new post
         </Link>
         {posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
               <li>{post.title}</li>
            </Link>
         ))}
      </div>
   )
}

export { BlogPage }
