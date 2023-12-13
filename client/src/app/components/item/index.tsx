import { ItemType } from '@/app/types/FilmsTypes'
import cl from './style.module.sass'
import Link from 'next/link'

const Item = ({item}: {item: ItemType}) => {
    return (
        <Link href={'/'+item.id}><div className={cl.item} style={{backgroundImage: `url(${item.cover})`}}>
            <div>
                <h2>{item.title}</h2>
                <p>{item.genre}</p>
            </div>
            
        </div></Link>
    )
}
export default Item