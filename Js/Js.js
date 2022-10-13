const head = document.querySelector("thead");
const body = document.querySelector("tbody");
const btn = document.getElementById("enviar");
btn.addEventListener("click", guardar);

async function retornar(url){
    try {
        
        fetch(url).then(function (respuesta) {
	        return respuesta.json();
        }).then(function (data) {
            
            for(i = 0; i < data.length; i++){
                body.innerHTML += "<td>"+data[i].nombre+"</td><td>"+data[i].apellido+"</td><td>"+data[i].telefono+"</td>";
            }
        });
    
    } catch (ex) {
        console.log(ex);
    }
}

function guardar(){
    try {
        
    n = document.getElementById("nombre");
    ap = document.getElementById("apellido");
    no = document.getElementById("numero");

    if(n != null && ap != null && no != null){
        fetch('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify({
                nombre:n.value,
                apellido:ap.value,
                telefono:no.value,
            })
        });
        
        retornar('http://www.raydelto.org/agenda.php');

    }else{
        window.alert("Rellene los campos faltantes");
    }
    } catch (error) {
        console.log(error)
    }
}


retornar('http://www.raydelto.org/agenda.php');