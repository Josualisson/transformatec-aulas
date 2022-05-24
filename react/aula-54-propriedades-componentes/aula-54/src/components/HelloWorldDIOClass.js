import React from 'react';
import HelloDev from './HelloDev'

class HelloWorldDIOClass extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <HelloDev/>
            <p>Salve galera da DIO Classe! tudo beleza?</p>
        </div>)
    }
}

export default HelloWorldDIOClass;