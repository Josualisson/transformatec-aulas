function HelloPlus(props){

    var n1 = 10
    var n2 = 5

    return (
        <div>
            <p>
                Soma: {props.calcNumbers(n1,n2)}
            </p>
        </div>
    )

}

export default HelloPlus
