import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import { useAuth } from './hooks/useAuth'
import TeacherDetails from './pages/TeacherDetails'

type Props = {
    redirectTo: string
}

function ProtectedRoutes({ redirectTo }: Props) {
    const { handleGetToken } = useAuth()

    return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />
}
function MainRoutes() {



    return (
        <Routes>
            <Route path='/' element={<SignIn />} />

            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/main' element={<Main />} />
                <Route path='/teacherDetail' element={<TeacherDetails />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes