"use client";
import cl from './css/home.module.sass'
import Item from './components/item'
import {useState} from 'react'
import { ItemType } from './types/FilmsTypes'


export default () => {
  
  const [items, setItems] = useState<ItemType[]>([{
    id: 1,
    title: 'Оппенгеймер',
    cover: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
    genre: 'Драма/История'
  }, 
  {
    id: 2,
    title: 'Интерстеллар',
    cover: 'https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg',
    genre: 'Драма/Фантастика'
  }, 
  {
    id: 3,
    title: 'Бойцовский клуб',
    cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/Fight_club.jpg/210px-Fight_club.jpg',
    genre: 'Драма/Триллер'
  }])

  return (<>
   <h1>Главная</h1>
   <div className={cl.films}>
        {
          items.map(item => <Item item={item} />)
        }

   </div> 
  </>)
}