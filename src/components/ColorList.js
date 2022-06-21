import React from 'react';
import Color from './Color';
import { useColors } from "./ColorProvider"
import { Container, Row, Col } from 'react-bootstrap';


function ColorList() {
    const { colors } = useColors();  // присваиваем контекст деструктурируемой переменной colors через хук useColors

    if (!colors.length) return <div> No colors Listen. (Add a Color)</div>;
    return (
        <div className='d-flex justify-content-between ' style={{ flexWrap: "wrap", marginLeft: '5rem' }} >
            {
                colors.map(colors =>
                    <Color
                        key={colors.id}
                        {...colors}
                    />
                )
            }
        </div>
    );
}

export default ColorList;
