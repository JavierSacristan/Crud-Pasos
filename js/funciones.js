window.onload = function () {
    //creo los arrays en los que guardare la informacion del xml
    var arrayId=new Array();
    var arrayDireccion=new Array();
    var arrayLatitud=new Array();
    var arrayLongitud=new Array();

    Id=document.getElementById("id");
    Direccion=document.getElementById("direccion");
    Latitud=document.getElementById("latitud");
    Longitud=document.getElementById("longitud");
    bSiguiente=document.getElementById("bSiguiente");
    bAnterior=document.getElementById("bAnterior");
    bModificar=document.getElementById("bModificar");
    bBorrar=document.getElementById("bBorrar");
    posicion=0;

    cargarXml();

    bSiguiente.addEventListener("click", registroSiguiente, false);
    bAnterior.addEventListener("click", registroAnterior, false);
    bModificar.addEventListener("click", modificarRegistro, false);
    bBorrar.addEventListener("click", borrarRegistro, false);
}

function cargarXml(){
    //en esta función leemos los datos del fichero datos.js
    //en formato XML y lo transformamos en una coleccion de array

    var codigo=new DOMParser();
    var myXML=codigo.parseFromString(datosFichero, "text/xml");

   
    //guardo en los arrays la informacion del xml
    arrayId=myXML.getElementsByTagName("id");
    arrayDireccion=myXML.getElementsByTagName("direccion");
    arrayLatitud=myXML.getElementsByTagName("latitud");
    arrayLongitud=myXML.getElementsByTagName("longitud");
        
    mostrarRegistro();
    
}

function mostrarRegistro(){
    //Visualizar el registro correspondiente a la posicion
    Id.value=arrayId[posicion].firstChild.nodeValue;
    Direccion.value=arrayDireccion[posicion].firstChild.nodeValue;
    Latitud.value=arrayLatitud[posicion].firstChild.nodeValue;
    Longitud.value=arrayLongitud[posicion].firstChild.nodeValue;
}

function registroSiguiente(){
    posicion++;

    if (posicion>arrayId.length-1){
        posicion=0;
    }
    mostrarRegistro();
}

function registroAnterior(){
    posicion--;

    if (posicion<0){
        posicion=0;
    }
    mostrarRegistro();
}

function modificarRegistro(){
    arrayId[posicion].firstChild.nodeValue=Id.value;
    arrayDireccion[posicion].firstChild.nodeValue=Direccion.value;
    arrayLatitud[posicion].firstChild.nodeValue=Latitud.value;
    arrayLongitud[posicion].firstChild.nodeValue=Longitud.value;
}

function borrarRegistro(){
    arrayId.splice(posicion,1);
    arrayDireccion.splice(posicion,1);
    arrayLatitud.splice(posicion,1);
    arrayLongitud.splice(posicion,1);

    posicion=0;
    mostrarRegistro(posicion);
}
