import { render } from '@testing-library/react';
import React from 'react';

class Car extends React.Component {
    contructor(){
        super()k
        this.state = {color: "green"}
    }
}

render(){
    return(
    <div>
        <p>A cor do carro é {this.state.color}</p>
    </div>)
}

export default Car;