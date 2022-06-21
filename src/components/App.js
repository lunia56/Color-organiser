import React, { useState } from "react";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {


    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    );
}
