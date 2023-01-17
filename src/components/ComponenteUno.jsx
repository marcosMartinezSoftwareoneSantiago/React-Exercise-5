import React from "react";
import { Credenciales } from "../models/Credenciales"

let credenciales = new Credenciales("Marcos", "marcos@correo.com");

const CoponenteUno = (props) => {

    return(
        <>
            <h2>{credenciales.getUsername}</h2>
            <p>Email: {credenciales.getEmail}</p>
            <p>Número de telefono: {props.telefono}</p>
        </>
    );
}

export default CoponenteUno;