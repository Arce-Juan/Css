function GenericJS_BloquearBody(condicion) {
    if (document.getElementById("idDivContenedorDeBloqueo")) {
        var divCont = $("#idDivContenedorDeBloqueo");
        if (condicion == true) {
            divCont.html('<div aling="center" id="_evidon-background" style="background: rgb(151, 151, 151); opacity: 0.5; position: fixed; top: 0px; left: 0px; bottom: 0px; width: 100%;height:100%; "><img id="miCarga" style="position: fixed;top: 50%;left: 50%;margin-top: -50px;margin-left: -50px;" class="imgr" src="favicon.ico"></div>');
        }
        else {
            divCont.html("");
        }
    }
    else {
        alert("El elemento idDivContenedorDeBloqueo no fue agregado en el fuente que desea bloquear..Debe agregarlo para bloquear la pantalla.");
    }
}

function BloquearPantalla() {
    GenericJS_BloquearBody(true);
    setTimeout ("GenericJS_BloquearBody(false);", 5000); 
}