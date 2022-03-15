import React, { Component } from "react";

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: props.nombre,
            apellido: props.apellido
        }
    }
    render() {
        const miVariable = "Variable local";
        const { nombre, apellido } = this.props;
        return (
          <>
            <h2>Componete Hello</h2>
            <div>Hola {this.props.nombre}, {this.props.apellido}</div>
            <div>Hola estado: {this.state.nombre}, {this.state.apellido}</div>
            <div>{miVariable}</div>
            <div>Desestruturación: {nombre}, {apellido}</div>
          </>
        );
    }
}

export default Hello;