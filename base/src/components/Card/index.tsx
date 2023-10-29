import { useNavigate } from 'react-router-dom'
import { Teacher } from '../../@types/Teacher'
import useGlobal from '../../hooks/useContext'
import Avatar from '../Avata'
import './style.css'

type Props = {
    teacher: Teacher
}

function Card({ teacher }: Props) {
    const { setTeacherSelect } = useGlobal()
    const navigate = useNavigate()

    function handleTeacherDetail() {
        navigate('/teacherDetail')
        setTeacherSelect(teacher)
    }
    return (
        <div
            className='teacherCard'
            onClick={handleTeacherDetail}
        >
            <Avatar image={teacher.avatar} />
            <h1>{teacher.name}</h1>
        </div>
    )
}

export default Card