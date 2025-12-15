import { createContext } from 'react';
 import { useState } from "react";

type ItemType = {
    id: string;
    text: string;
}

const [items, setItems] = useState<ItemType[]>([])

export const ItemContextProvider = createContext( 
    {
        list: items, //lista é do tipo items ou recebe items?
        addTask: function (text: string) {
            setItems([...items, { id: items.length.toString(), text: text }]);
            console.log(items)
        }
    }
);
