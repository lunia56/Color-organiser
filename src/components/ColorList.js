import React from 'react';
import Color from './Color';
import { useColors } from "./ColorProvider"  // экспортируем из index.js наш созданнный контекст

function ColorList({

    // onRemoveColor = f => f,
    // onRateColor = f => f
}) {
    const { colors } = useColors();  // присваиваем контекст переменной colors через хук useColors

    //условная отрисовка. мы получаем состояние от корневого компонента App. Если свойства не получены, отображаем сообщение.
    if (!colors.length) return <div> No colors Listen. (Add a Color)</div>;
    // если 1 return не сработал, значит выполняется след return и мы отрисовываем этот массив цветов
    return (
        <div>
            {
                colors.map(colors =>
                    <Color
                        key={colors.id}
                        {...colors}


                    // код используемый до контекста:
                    // onRemove={onRemoveColor} //получаем от Color id цвета который хотим удалить(нажали на кнопку удалить).
                    // // и далее по цепочке передаем родителю-App(там хранится состояние,которое будет менять цвет)
                    // onRate={onRateColor}


                    />) // создаем из массива цветов компоненты с цветами и передаем в них состояние,лежащее в App
            }
        </div>
    );
}

export default ColorList;
