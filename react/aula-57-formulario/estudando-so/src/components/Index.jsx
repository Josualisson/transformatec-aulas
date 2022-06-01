const Item = (props) => {

    
    return(
        <a href="/" class="list-group-item list-group-item-action list-group-item-dark">
            {props.texto}

            {/* o Children pod ser usado para colocar entre tags */}
            {/* {props.children} */}
        </a>
    )
}
export default Item;