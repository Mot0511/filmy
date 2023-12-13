import Link from 'next/link'
import Fillbutton from '../UI/fillbutton'
import cl from './style.module.sass'

const Header = () => {
    return (
        <div className={cl.header}>
            <h1 className={cl.logo}>Filmy</h1>
            <ul className={cl.menu}>
                <li><Link href="/">Главная</Link></li>
                <li><Link href="/films">Фильмы</Link></li>
                <li><Link href="/series">Сериалы</Link></li>
                <li><Link href="/aboutus">О нас</Link></li>
            </ul>
            <Link href="/profile/suvorovmatvej9"><Fillbutton fullwidth={false}>Войти</Fillbutton></Link>
            
        </div>
    )
}
export default Header
