import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
   const location = useLocation()
   const auth = false
   // если можем попасть на страницу, то переходим на нее
   // если не можем, то деалем переадресацию на страницу авторизации
   if (!auth) {
      return <Navigate to="/login" state={{ from: location }} />
      // state используем, чтобы можно потом вернуться на страницу
   }

   return children
}

export { RequireAuth }
