import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'

const RequireAuth = ({ children }) => {
   const location = useLocation()
   const { user } = useAuth()
   // если можем попасть на страницу, то переходим на нее
   // если не можем, то деалем переадресацию на страницу авторизации
   if (!user) {
      return <Navigate to="/login" state={{ from: location }} />
      // state используем, чтобы можно потом вернуться на страницу
   }

   return children
}

export { RequireAuth }
