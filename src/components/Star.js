import React from 'react';
import { FaStar } from "react-icons/fa"

// КОМПОНЕНТ Star отвечает за интерактивное отображение цвета звезды. вып-тся условная отрисовка. в этот компонент мы передаем состояние,
// onSelect - тут мы создаем функцию пустышку, которую вешаем на событие onClick. 
//А в компоненте StarRating мы научим эту функцию менять состояние 

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default Star