import './style.css'
import Logo from '../../assets/logo.svg'
import ArrowBack from '../../assets/arrow-back.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
    showBack?: boolean
}

function Header({ showBack }: Props) {
    const navigate = useNavigate()


    return (
        <header>
            {
                showBack &&

                <img src={ArrowBack}
                    alt="Arrow back"
                    className='arrowBack'
                    onClick={() => navigate(-1)}
                />
            }
            <img src={Logo} alt="logo" />
        </header>
    )
}

export default Header