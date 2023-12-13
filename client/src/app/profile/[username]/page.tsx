"use client";

import { useState } from "react";
import Item from "../../components/item";
import cl from '../../css/home.module.sass'

export default () => {
    const [items, setItems] = useState([{}])
    return (
        <>
            <h1>Избранное</h1>
            <div className={cl.films}>
                {
                    items.map(item => <Item item={item} />)
                }
            </div> 
        </>
    )
}