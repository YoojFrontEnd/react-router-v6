import { useParams } from "react-router-dom"

const EditPost = () => {
   const { id } = useParams()

   return <h1>Edit post #{id}</h1>
}

export { EditPost }
