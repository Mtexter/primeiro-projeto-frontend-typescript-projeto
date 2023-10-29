import './style.css'
import Header from '../../components/Header'
import Avatar from '../../components/Avata'
import useGlobal from '../../hooks/useContext'


function TeacherDetails() {
    const { teacherSelect } = useGlobal()
    return (
        <div className='container'>
            <Header showBack />

            <div className='teacherDetail'>
                <Avatar image={teacherSelect.avatar} />
                <h1>{teacherSelect.name}</h1>
                <span>{teacherSelect.stack}</span>

                <div className='horizontalLine line'></div>

                <h3>Bio</h3>
                <p>{teacherSelect.bio}</p>
            </div>
        </div>
    )
}

export default TeacherDetails