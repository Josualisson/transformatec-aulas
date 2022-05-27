import React from 'react'

class HelloWorld extends React.Component {


    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <p>
                    Hello meu camarada {this.props.name} !
                </p>
            </div>
        )
    }

}

export default HelloWorld
