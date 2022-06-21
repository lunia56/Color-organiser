import React, { useState } from "react";
import { useInput } from "../helpers/helpers";
import { useColors } from "./ColorProvider"
import { Button, Form, Card } from 'react-bootstrap';


const AddColorForm = () => {

    const [titleProps, resetTitle] = useInput(""); //используем свой хук useInput
    const [colorProps, resetColor] = useInput("#563d7c");
    const { createColor } = useColors();

    const submit = e => {
        e.preventDefault(); // отменяем автоматический POST запрос после отправки формы()
        createColor(titleProps.value, colorProps.value);
        resetTitle(); //сбрасываем атрибут value для обоих компонентов input, для очистки формы
        resetColor();
    };
    return (

        <Card style={{ width: '18rem', marginTop: '5rem', marginBottom: '5rem', marginLeft: '5rem' }}>

            <Card.Body>
                <Card.Title>Добавьте цвет</Card.Title>
                <Form onSubmit={submit}>

                    <Form.Group className="mb-3" controlId="formGroupEmail">

                        <Form.Control {...titleProps} type="text" placeholder="Название цвета..." required />
                    </Form.Group>
                    <Form.Control
                        {...colorProps}
                        type="color"
                        id="exampleColorInput"
                        defaultValue="#563d7c"
                        title="Choose your color"
                        required
                    />
                    <Button variant="primary" type="submit" className="mt-2">
                        Добавить
                    </Button>
                </Form>
            </Card.Body>
        </Card>


    )

}
export default AddColorForm;


