function submit(){
    var name1 = document.getElementById("name").value; 
    var age = document.getElementById("age").value; 
    var peso = document.getElementById("peso").value; 
    var table = document.createElement("tr")

    table.innerHTML = name1 + age + peso

    document.getElementById("table").appendChild("td")
}
submit()

