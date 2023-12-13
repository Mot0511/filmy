'use client'
import Fillbutton from '../components/UI/fillbutton'
import cl from './style.module.sass'
import { useParams } from "next/navigation"

export default function Film(){
    const id = useParams().id
    const readMore = () => {
        const text = document.getElementById('plot')
        const btn = document.getElementById('readMoreBtn')
        if (text && btn){
            text.style.height = 'auto'
            btn.style.display = 'none'
        }
        
    }

    return (
        <>
            <div className={cl.content}>
                <div className={cl.left}>
                    <div className={cl.cover} style={{backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg)`}}></div>
                    <a href={`/video/${id}`}><Fillbutton style={{width: '103%', height: '50px', marginTop: '10px'}}>Смотреть</Fillbutton></a>
                </div>
                <div className={cl.right}>
                    <p className={cl.data}>Драма/История • 2023 • США • Кристофер Нолан • 18+</p>
                    <h1>Оппенгеймер (2023)</h1>
                    <p className={cl.description}>История жизни американского физика-теоретика Роберта Оппенгеймера, который во времена Второй мировой войны руководил Манхэттенским проектом — секретными разработками ядерного оружия.</p>
                </div>
            </div>
        </>
    )
}