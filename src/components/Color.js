import React from 'react';
import StarRating from './StarRating';
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider"

// отрисовываем наш компонент Color в котором мы используем состояние из App. 
function Color({
    id,
    title,
    color,
    rating,

    // onRemove = f => f, // функция, удаляющая цвет // этот код использовался до Контекста
    // onRate = f => f // функция изменяющее кол-во звезд
}) {

    const { rateColor, removeColor } = useColors() // получаем необх функции из контекста 

    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, width: 450, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)}
            />
        </section>
    );
}

export default Color;