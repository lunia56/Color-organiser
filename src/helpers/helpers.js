import { useState } from "react";

// функция которая создает массив из любой длины которая поступает как аргумент
const createArray = length => [...Array(length)]

export default createArray;



// Пишем свой хук useInput который содержит состояние, и может менятся при нажатии на клавиши 
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) }, // event.target.value содержит в себе ссылку на dom элемент,где произошло событие
        //при вводе доп символов, изменяем состояние и заново отображаем компонент
        () => setValue(initialValue)
    ];
};