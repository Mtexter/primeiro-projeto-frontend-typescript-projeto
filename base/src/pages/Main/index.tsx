import './styles.css';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Teacher } from '../../@types/Teacher';
import { useState, useEffect } from 'react'
import api from '../../services/api';

function Main() {
  const [teachersList, setTeachersList] = useState<Teacher[]>([])

  async function LoadTeachers() {
    try {
      const response = await api.get('/teachers')
      setTeachersList(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    LoadTeachers()
  }, [])

  return (
    <div className='container'>

      <Header />

      <div className='mainTeachers'>
        {teachersList.map((teacher) => (
          <Card key={teacher.id} teacher={teacher} />
        ))}
      </div>

    </div>
  );
}

export default Main;
