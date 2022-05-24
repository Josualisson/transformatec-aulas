function HelloPerson(props){

    return(
        <div>
            <p> Salve! {props.person.nome} {props.person.sobrenome}</p>
        </div>
    )

}

export default HelloPerson
