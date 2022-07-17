import { Link } from 'react-router-dom'
import './header.css'

function Header(){
    return(
        <div>
            <header>
            <Link className= 'Logo' to ='/'> Prime Flix</Link>
            <Link className='favoritos' to='/favoritos'>Meu Filme</Link>
            </header>
        </div>
    )
}

export default Header