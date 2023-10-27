import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import SignIn from './pages/SignIn'


function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/Main' element={<Main />} />
        </Routes>
    )
}

export default MainRoutes