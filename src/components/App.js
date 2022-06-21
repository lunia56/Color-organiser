import React, { useState } from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";

export default function App() {


    return (
        <>
            <AddColorForm                 //форма добавления цвета
            // onNewColor={createColor} // код до контекста
            />

            <ColorList
            // colors={colors} //// код до контекста. передаем в доч элемент-value состояния

            //логика изменения состояния кол-ва звезд/ получаем данные из дочерних элементов через свойства функций
            // onRateColor={rateColor}// код до контекста

            //логика удаления цвета (фильтруем и исключаем цвет ,id которого получили при событии(нажатии на кнопку удалить))
            // onRemoveColor={removeColor} // код до контекста

            />

            {/* <StartRating   
                style={{ backgroundColor: "lightblue" }}
                onDoubleClick={e => alert("double click")}
            /> */}
        </>

    );
}
