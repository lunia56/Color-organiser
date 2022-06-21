import React, { useState } from "react";
import { useInput } from "../helpers/helpers";
import { useColors } from "./ColorProvider"



const AddColorForm = () => {

    const [titleProps, resetTitle] = useInput(""); // делаем контролируемый компонент, не используя useRef и не изменяя DOM напрямую
    const [colorProps, resetColor] = useInput("#000000");
    const { createColor } = useColors();
    // const txtTitle = useRef(); // ссылка которая будет ссылатся на текстовое поле которое мы добавили в форму для ввода заголовка
    // const hexColor = useRef(); // обеспеч доступ к 16-ричным значениям цвета HTML 

    const submit = e => {
        e.preventDefault(); // отменяем автоматический POST запрос после отправки формы()

        // const title = txtTitle.current.value; // ссылку на DOM элемент присваиваем переменной title. ЕcЛИ ЧЕРЕЗ useRef
        // const color = hexColor.current.value; // аналогично
        createColor(titleProps.value, colorProps.value);
        // onNewColor(titleProps.value, colorProps.value);// передаем наши ссыки функции, которая через props идет к родительскому компоненту

        resetTitle(); //сбрасываем атрибут value для обоих компонентов input, для очистки формы
        resetColor();
        // txtTitle.current.value = ""; // если бы делали через useRef
        // hexColor.current.value = "";

    };
    return (

        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="Название цвета..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>Добавить цвет</button>
        </form>
    )



    //         <form onSubmit={submit}>
    //             <imput ref={txtTitle} type="text" placeholder="" required />
    //             {/* required- атрибут для обязательного заполнения перед отправкой запроса
    //  ref= {txtTitle} - устанавливаем значение для ссылок. В результате будет создано поле current в объекте ref которое будет ссылатся на элемент DOM*/}
    //             <imput ref={hexColor} type="Color" required />
    //             <button>Добавить цвет</button>
    //         </form>

}
export default AddColorForm;