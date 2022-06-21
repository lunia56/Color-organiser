import React from 'react';
import StarRating from './StarRating';
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider"
import { Button, Card } from 'react-bootstrap';


function Color({
    id,
    title,
    color,
    rating,
}) {

    const { rateColor, removeColor } = useColors()

    return (
        <section>
            <Card style={{ width: '18rem', marginBottom: '15px', }}>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" style={{ height: 150, backgroundColor: color }} />

                    <Card.Text>
                    </Card.Text>

                    <StarRating
                        selectedStars={rating}
                        onRate={rating => rateColor(id, rating)}
                    />
                    <Button variant="outline-danger" onClick={() => removeColor(id)}>
                        <FaTrash />
                    </Button>
                </Card.Body>
            </Card>
        </section>

    );
}

export default Color;